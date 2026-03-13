import { CardAtivo } from './components/CardAtivo.jsx';
import { Heading } from './components/Heading.jsx';
import './styles/theme.css';

export function App() {
return (
<div className="container">
<Heading>💰 Meu Portfólio 2026</Heading>

<div className="grid">
{/* Card de Bitcoin */}
<CardAtivo titulo="Bitcoin (BTC) 🚀">
<p>Preço: R$ 350.000,00</p>
<span style={{ color: 'var(--alta)' }}>+5.2% hoje</span>
</CardAtivo>

{/* Card de Fundo Imobiliário */}
<CardAtivo titulo="Fundo Imobiliário (HGLG11) 🏢">
<p>Dividendo: R$ 1,10</p>
<span style={{ color: 'var(--alta)' }}>Rendimento estável</span>
</CardAtivo>

{/* Card de Ação */}
<CardAtivo titulo="Empresa X (VALE3) 📉">
<p>Preço: R$ 65,20</p>
<span style={{ color: 'var(--baixa)' }}>-1.8% hoje</span>
</CardAtivo>
</div>
</div>
)
}