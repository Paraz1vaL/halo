export default function Timeline() {
    const events = [
      { date: "2023", event: "Pandangan Pertama", photo: "/image/D088ED61-E0B1-49BB-B14D-8E0ADFEA02CB.JPG" },
      { date: "2024", event: "Pandangan Kedua", photo: "/image/IMG_1063.PNG" },
      { date: "2025", event: "Pandangan ketiga", photo: "/image/IMG_1525.jpeg" },
      { date: "2026", event: "Lamaran? ( Coming soon )", photo: "/image/pngtree-wedding-proposal-cartoon-colored-clipart-happy-drawing-colored-vector-png-image_12920497.png" },
      { date: "2027", event: "Nikah? ( On Progress )", photo: "/image/pngtree-wedding-proposal-cartoon-colored-clipart-happy-drawing-colored-vector-png-image_12920497.png" },
    ];
  
    return (
      <section id="timeline" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Sejarah kita</h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          {events.map((event, index) => (
            <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'sm:justify-end'}`}>
              <div className="relative w-full sm:w-1/2 p-4">
                <div className="absolute top-5 left-0 sm:left-auto sm:right-0 w-6 h-6 bg-gray-900 rounded-full transform translate-x-[-50%] sm:translate-x-[50%]"></div>
                <div className="bg-white p-6 rounded shadow-sm ml-8 sm:ml-0 sm:mr-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={event.photo} alt={event.event} className="w-12 h-12 object-cover rounded-full" />
                    <h3 className="text-xl font-semibold">{event.date}</h3>
                  </div>
                  <p>{event.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  