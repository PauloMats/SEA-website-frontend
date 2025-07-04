"use client";

import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import PrevalenciaChart from '@/components/PrevalenciaChart';
import MercadoChart from '@/components/MercadoChart';
import TelepsicologiaChart from '@/components/TelepsicologiaChart';

const colors = {
    teal: '#008B8B',
    cyan: '#00CECB',
    redAccent: '#FF5E5B',
    paleYellow: '#FFFFEA',
    gray800: '#212529',
    gray700: '#495057',
    gray600: '#6C757D',
    gray500: '#ADB5BD',
    gray300: '#DEE2E6',
    white: '#FFFFFF',
};

const StyledBody = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: #F8F9FA;
    color: ${colors.gray800};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const Header = () => (
    <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-teal mb-2">SEA</h1>
        <p className="text-xl md:text-2xl text-gray-700">A Próxima Geração do Apoio Emocional no Brasil</p>
    </header>
);

const ProblemSection = () => (
    <section id="problema" className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A Crise Silenciosa do Brasil</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">O Brasil enfrenta um desafio crítico de saúde mental, com milhões de pessoas sofrendo em silêncio. Estes números revelam a urgência de uma solução inovadora e acessível.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                <span className="text-6xl font-bold text-red-accent">45%</span>
                <p className="mt-2 text-lg text-gray-700">da população brasileira relata sofrer de ansiedade.</p>
                <p className="text-sm text-gray-500 mt-1">(Ipsos, 2024)</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                <span className="text-6xl font-bold text-red-accent">4º</span>
                <p className="mt-2 text-lg text-gray-700">lugar no ranking global de estresse.</p>
                 <p className="text-sm text-gray-500 mt-1">(ISMA-BR)</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
                <span className="text-6xl font-bold text-red-accent">77%</span>
                <p className="mt-2 text-lg text-gray-700">dos brasileiros refletem sobre a importância da saúde mental.</p>
                 <p className="text-sm text-gray-500 mt-1">(Pitch Deck SEA)</p>
            </div>
        </div>

        {/* Placeholder for chart */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
             <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Grupos Mais Afetados pela Ansiedade</h3>
             <p className="text-md text-gray-600 text-center mb-8">A ansiedade não afeta a todos igualmente. Mulheres e jovens adultos apresentam taxas de prevalência significativamente mais altas, indicando uma necessidade de suporte direcionado.</p>
            <PrevalenciaChart />
        </div>
    </section>
);

const MarketSection = () => (
    <section id="mercado" className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Um Mercado em Ebulição</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">A crise de saúde mental coincide com uma explosão no mercado de saúde digital, criando uma oportunidade sem precedentes para soluções escaláveis como o SEA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold text-teal">R$ 2.1 Bilhões</span>
                <p className="mt-2 text-lg text-gray-700">investidos em Healthtechs no Brasil em 2024.</p>
            </div>
             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold text-teal">17.3%</span>
                <p className="mt-2 text-lg text-gray-700">Crescimento Anual Composto (CAGR) esperado para o mercado global de tecnologia de saúde mental.</p>
            </div>
        </div>
         {/* Placeholder for chart */}
         <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Crescimento do Mercado Global de Tecnologia de Saúde Mental</h3>
            <p className="text-md text-gray-600 text-center mb-8">O setor está projetado para mais que quadruplicar em uma década, demonstrando a imensa confiança do mercado e o potencial de crescimento a longo prazo.</p>
            <MercadoChart />
        </div>
    </section>
);

const SolutionSection = () => (
    <section id="solucao" className="mb-16">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Apresentando SEA: Uma Nova Abordagem</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">O SEA não é apenas um aplicativo. É uma plataforma integrada que cria um ecossistema de cuidado, combinando o melhor da tecnologia com o insubstituível toque humano.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
                <div className="text-center lg:col-span-2">
                    <div className="p-6 border-2 border-dashed border-cyan rounded-xl">
                        <span className="text-6xl">🤖</span>
                        <h4 className="text-2xl font-bold text-teal mt-2">IA Empática 24/7</h4>
                        <p className="text-gray-600 mt-2">Uma IA treinada em TCC oferece suporte instantâneo e qualificado, detectando crises antes que elas aconteçam através da análise de voz e texto.</p>
                    </div>
                </div>

                {/* Flow Arrow for Large Screens */}
                <div className="hidden lg:flex flex-col items-center justify-center">
                    <div className="w-0.5 h-10 bg-cyan"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-cyan"></div>
                </div>
                 {/* Flow Arrow for Small/Medium Screens */}
                 <div className="lg:hidden flex-row items-center justify-center my-4">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-cyan"></div>
                </div>


                <div className="text-center">
                    <div className="p-6 border-2 border-dashed border-cyan rounded-xl">
                        <span className="text-6xl">⌚</span>
                        <h4 className="text-2xl font-bold text-teal mt-2">Dados Biométricos</h4>
                        <p className="text-gray-600 mt-2">Integração com wearables para criar um &quot;diário emocional objetivo&quot;, transformando dados vitais em insights acionáveis.</p>
                    </div>
                </div>

                {/* Flow Arrow for Large Screens */}
                 <div className="hidden lg:flex flex-col items-center justify-center">
                    <div className="w-0.5 h-10 bg-cyan"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-cyan"></div>
                </div>
                 {/* Flow Arrow for Small/Medium Screens */}
                 <div className="lg:hidden flex-row items-center justify-center my-4">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-cyan"></div>
                </div>


                 <div className="text-center lg:col-span-1">
                    <div className="p-6 border-2 border-dashed border-cyan rounded-xl">
                        <span className="text-6xl">🤝</span>
                        <h4 className="text-2xl font-bold text-teal mt-2">Conexão Humana</h4>
                        <p className="text-gray-600 mt-2">Uma ponte para psicólogos e clínicas, com dashboards de insights e agendamento facilitado, empoderando profissionais.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const DifferentialsSection = () => (
    <section id="diferenciais">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Validado pelo Mercado</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">Nossa abordagem não é apenas inovadora, é baseada em tendências e tecnologias comprovadas que já estão moldando o futuro da saúde.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Adoção da Telepsicologia no Brasil</h3>
                <p className="text-md text-gray-600 text-center mb-8">A telemedicina já é uma realidade consolidada, com altíssima adesão dos profissionais, validando nosso modelo de integração com psicólogos.</p>
                {/* Placeholder for chart */}
                <TelepsicologiaChart />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">O Poder da Tecnologia Comprovada</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-cyan text-white rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                        <div>
                            <h4 className="font-bold text-lg text-teal">IA Eficaz</h4>
                            <p className="text-gray-600">Estudos mostram que chatbots de IA podem ser tão eficazes quanto a terapia tradicional na construção de laços terapêuticos e no suporte inicial.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-cyan text-white rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                        <div>
                            <h4 className="font-bold text-lg text-teal">Dados Confiáveis de Wearables</h4>
                            <p className="text-gray-600">A precisão dos dados de smartwatches (sono, FC) aproxima-se dos padrões clínicos, permitindo análises preditivas confiáveis.</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <div className="bg-cyan text-white rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                        <div>
                            <h4 className="font-bold text-lg text-teal">Alta Satisfação do Paciente</h4>
                            <p className="text-gray-600">65% dos pacientes relatam maior satisfação com a telepsicologia, reforçando a demanda por soluções digitais e remotas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HomePage = () => {
    return (
        <StyledBody>
            <main className="container mx-auto p-4 md:p-8">
                <Header />
                <ProblemSection />
                <MarketSection />
                <SolutionSection />
                <DifferentialsSection />
            </main>
        </StyledBody>
    );
};

export default HomePage;