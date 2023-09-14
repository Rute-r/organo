import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Toggle from './componentes/Toggle';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ];

  const [colaboradores, setColaborador] = useState([]);
  const [toggle, setToggle] = useState(true);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  };

  const toggleFormulario = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <Banner />
      {toggle && (
        <Formulario
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)}
        />
      )}

      <Toggle toggleFormulario={toggleFormulario} />
      <section className="times">
        <h1>Minha Organização</h1>

        {times.map((time) => (
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          />
        ))}
      </section>

      <Rodape />
    </div>
  );
}

export default App;
