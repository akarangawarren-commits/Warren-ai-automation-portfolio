import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'Warren Akaranga | AI Automation & Legal Technology Consultant',description:'AI-powered workflow automation, legal CRM integration, client intake, and business process optimization for law firms and service businesses.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="antialiased">{children}</body></html>}
