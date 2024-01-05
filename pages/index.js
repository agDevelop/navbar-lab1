import { Tabs, Tab } from "@nextui-org/react";

export default function Home() {
  return <TabsView />;
}

function TabsView() {
  let tabs = [
    {
      id: "0",
      label: "Главная",
    },
    {
      id: "1",
      label: "Услуги",
    },
    {
      id: "2",
      label: "О нас",
    },
    {
      id: "3",
      label: "Контакты",
    },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-8`}
    >
      <div className="flex w-full flex-col items-center">
        <Tabs
          aria-label="Custom Tabs"
          items={tabs}
          radius="sm"
          classNames={{
            tabList: "rounded w-full relative bg-white shadow-inner",
            cursor: "rounded w-full bg-indigo-300",
            tab: "max-w-fit px-4 h-8",
            tabContent: "group-data-[selected=true]:text-white",
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <p>Выбрано: {item.label}</p>
            </Tab>
          )}
        </Tabs>
      </div>
    </main>
  );
}
