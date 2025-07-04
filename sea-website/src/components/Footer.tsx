'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Linkedin, Facebook, MessageSquare, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#175FA4] text-white py-10 px-6 rounded-t-2xl mt-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image
              src="/img/logo-sea.png"
              alt="SEA Logo"
              width={160}
              height={40}
            />
          </Link>
          <div className="flex gap-4 text-white text-xl">
            <Link href="#"><Instagram /></Link>
            <Link href="#"><Youtube /></Link>
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Linkedin /></Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <MessageSquare className="w-5 h-5" /> Atendimento
          </Link>
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <HelpCircle className="w-5 h-5" /> FAQ
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10 text-sm">
          <div>
            <h4 className="font-bold mb-2">Projeto</h4>
            <ul className="space-y-1">
              <li><Link href="#problema">Problema</Link></li>
              <li><Link href="#solucao">Solução</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#">Privacidade</Link></li>
              <li><Link href="#">Termos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Institucional</h4>
            <ul className="space-y-1">
              <li><Link href="#">Contato</Link></li>
              <li><Link href="#">Sobre</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10">
        © {year} SEA Platform. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;