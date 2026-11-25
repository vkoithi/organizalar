import './App.css'

// Criando Componente React
function Header() {
  return (
    <header>OrganizaLar</header>
  )
}

function App() {
  
  return (
    <>
      <Header />
      <main>
        <h1>Minhas Despesas</h1>
        <p>Um sistema feito para ter um controle financeiro maior sobre suas despesas</p>
      </main>

      <article>
        <h1>Meu Primeiro Componente Personalizado</h1>
      </article>
    </>
  )
}

export default App
