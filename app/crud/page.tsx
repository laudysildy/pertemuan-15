import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Container, Form, Button, Table, Card, Row, Col } from "react-bootstrap";

async function TabelProduk() {
  // READ: Ambil semua data dari SQLite
  const items = await prisma.item.findMany({
    orderBy: { id: "desc" },
  });

  // UPDATE: Ubah data yang sudah ada
  async function updateItem(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    const nama = formData.get("nama") as string;
    const kategori = formData.get("kategori") as string;
    const harga = Number(formData.get("harga"));

    await prisma.item.update({
      where: { id },
      data: { nama, kategori, harga },
    });

    revalidatePath("/crud");
  }

  // DELETE: Hapus data
  async function deleteItem(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    await prisma.item.delete({ where: { id } });
    revalidatePath("/crud");
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Item</th>
          <th>Kategori</th>
          <th>Harga</th>
          <th>Aksi (Edit & Hapus)</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center">
              Belum ada data. Silakan tambahkan data secara lokal sebelum push ke GitHub.
            </td>
          </tr>
        ) : (
          items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td colSpan={3}>
                {/* Form Inline untuk Edit (Update) */}
                <Form action={updateItem} className="d-flex gap-2">
                  <input type="hidden" name="id" value={item.id} />
                  <Form.Control type="text" name="nama" defaultValue={item.nama} required />
                  <Form.Control type="text" name="kategori" defaultValue={item.kategori} required />
                  <Form.Control type="number" name="harga" defaultValue={item.harga} required />
                  <Button variant="warning" size="sm" type="submit">
                    Update
                  </Button>
                </Form>
              </td>
              <td>
                {/* Form untuk Hapus (Delete) */}
                <Form action={deleteItem}>
                  <input type="hidden" name="id" value={item.id} />
                  <Button variant="danger" size="sm" type="submit">
                    Hapus
                  </Button>
                </Form>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default function CrudPage() {
  // CREATE: Tambah data baru
  async function createItem(formData: FormData) {
    "use server";
    const nama = formData.get("nama") as string;
    const kategori = formData.get("kategori") as string;
    const harga = Number(formData.get("harga"));

    if (!nama || !kategori || !harga) return;

    await prisma.item.create({
      data: { nama, kategori, harga },
    });

    revalidatePath("/crud");
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">Manajemen Data Produk (CRUD Prisma + SQLite)</h2>

      {/* FORM TAMBAH DATA (CREATE) */}
      <Card className="mb-4 p-3 bg-light">
        <h5>Tambah Data Baru</h5>
        <Form action={createItem}>
          <Row className="g-2">
            <Col md={4}>
              <Form.Control type="text" name="nama" placeholder="Nama Item" required />
            </Col>
            <Col md={3}>
              <Form.Control type="text" name="kategori" placeholder="Kategori" required />
            </Col>
            <Col md={3}>
              <Form.Control type="number" name="harga" placeholder="Harga (Rp)" required />
            </Col>
            <Col md={2}>
              <Button variant="primary" type="submit" className="w-100">
                Tambah
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* TABEL TAMPIL, EDIT & HAPUS DATA (READ, UPDATE, DELETE) */}
      <Suspense fallback={<p>Memuat data...</p>}>
        <TabelProduk />
      </Suspense>
    </Container>
  );
}