import ChatHeader from "@/components/chat/header/ChatHeader";
import SideBar from "@/components/chat/sidebar/SideBar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex overflow-y-hidden h-screen">
      <SideBar />
      <section className="bg-black h-full w-full flex-1 p-2 flex space-y-2 flex-col text-white">
        <ChatHeader />
        {children}
      </section>
    </main>
  );
}
