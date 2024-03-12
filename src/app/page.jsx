import Layout from "@/components/layout";

export default function HomePage() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-tr from-purple-500
    `}>
      <Layout title="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}