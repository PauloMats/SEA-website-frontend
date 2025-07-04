import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
 <h1 className="text-4xl md:text-6xl font-bold text-teal text-center mb-8">Sobre a SEA</h1>

 <section className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
 <p className="text-lg text-gray-600">
          Na SEA - Tecnologia em Saúde Mental e Bem Estar LTDA, nossa missão é transformar o acesso ao apoio emocional no Brasil, oferecendo uma plataforma inovadora que combina tecnologia de ponta com a expertise humana para prevenir crises, salvar vidas e promover o bem-estar contínuo.
 </p>
 </section>

 <section className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Apoio Contínuo com IA Empática</h2>
 <p className="text-lg text-gray-600">
          Desenvolvemos uma Inteligência Artificial própria, finamente ajustada por terapeutas, psicólogos e psiquiatras. Essa IA está disponível 24 horas por dia, 7 dias por semana, para fornecer suporte imediato e qualificado em momentos de crise, oferecendo um canal de auxílio sempre acessível.
 </p>
 </section>

 <section className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mapeamento Emocional Inteligente</h2>
 <p className="text-lg text-gray-600">
 Integramos dados de smartwatches e outros wearables para criar um &quot;diário emocional objetivo&quot;. Ao analisar padrões de sono, frequência cardíaca e outros sinais vitais, nossa plataforma fornece insights valiosos para usuários e profissionais, permitindo um acompanhamento mais preciso e proativo do bem-estar emocional.
 </p>
 </section>

 <section className="mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Empoderando Profissionais de Saúde Mental</h2>
 <p className="text-lg text-gray-600">
          Criamos dashboards intuitivos para psicólogos e clínicas, apresentando os dados coletados de forma clara e organizada. Isso auxilia os profissionais a terem uma visão mais completa do estado emocional de seus pacientes, otimizando as sessões de terapia e facilitando o agendamento e a gestão de consultas.
 </p>
 </section>

 <section>
 <p className="text-xl font-bold text-teal text-center">SEA: Construindo um futuro onde o cuidado com a saúde mental é acessível, inteligente e humano.</p>
 </section>
    </div>
  );
};

export default AboutUsPage;