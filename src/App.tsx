import React, { useState } from 'react';
import './App.css';

export function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState('');

  const phoneDisplay = '(48) 98877-3779';
  const whatsappNumber = '5548988773779';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !mensagem.trim()) {
      setError('Por favor, preencha o Nome e a Mensagem.');
      return;
    }

    setError('');

    // Montar texto da mensagem para o WhatsApp
    let texto = `Olá, meu nome é *${nome.trim()}*.` + '\n';
    if (email.trim()) {
      texto += `E-mail: ${email.trim()}` + '\n';
    }
    texto += `\n*Mensagem:*\n${mensagem.trim()}`;

    const encoded = encodeURIComponent(texto);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    // Redireciona diretamente para o WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="logo-dot"></span>
            BuildSource
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span>✨</span> Soluções Digitais sob Medida
          </div>
          <h1 className="hero-title">
            Soluções digitais para tirar suas ideias do papel
          </h1>
          <p className="hero-subtitle">
            Desenvolvimento de software, automação e inteligência artificial para tornar processos mais simples e acelerar seu negócio.
          </p>
          <a href="#contato" className="btn btn-whatsapp">
            Iniciar Conversa no WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-header">
              <h2 className="contact-title">Vamos conversar?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Preencha o formulário e continue o atendimento direto pelo WhatsApp: <strong>{phoneDisplay}</strong>
              </p>
            </div>

            {error && (
              <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#f87171', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome" className="form-label">Nome *</label>
                <input
                  id="nome"
                  type="text"
                  className="form-input"
                  placeholder="Seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail (opcional)</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem" className="form-label">Como podemos ajudar? *</label>
                <textarea
                  id="mensagem"
                  className="form-textarea"
                  placeholder="Conte brevemente sobre o seu projeto ou necessidade..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem' }}>
                Enviar Mensagem para WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} BuildSource. Todos os direitos reservados.</p>
          <p style={{ marginTop: '0.35rem', fontSize: '0.8rem' }}>
            Desenvolvido pela BuildSource Software Factory.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
