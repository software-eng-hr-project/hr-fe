import Stepper from "components/common/Stepper";

export default function Dashboard() {
  return (
    <div>
      <Stepper
        active={0}
        steps={[
          {
            title: "Ekle",
            description: "Çalışan Ekle",
            children: <div>Çalışan Ekle</div>,
          },
          {
            title: "Onayla",
            description: "Bilgileri Onayla",
            children: <div>Bilgileri Onayla</div>,
          },
        ]}
      />
    </div>
  );
}
