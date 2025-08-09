import Contacts from "@/components/contact/contacts";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Контакты",
    description: "Свяжитесь с нами для сотрудничества",
  };
}

export const dynamic = "force-dynamic";

export default function ContactsPage() {
  return (
    <main className="global-main contacts-main">
      <Contacts />
    </main>
  );
}
