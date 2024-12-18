export default function ReasonsForLove() {
    const reasons = [
        "Senyummu mencerahkan hariku",
        "Kebaikanmu menginspirasiku",
        "Kita tertawa bersama tanpa henti",
        "Kamu mendukung mimpiku",
        "Kita tumbuh bersama",
        "Petualangan kita bersama",
    ];

    return (
        <section id="reasons" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">TOP 6!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-lg rounded-xl transform transition duration-500 hover:scale-110 hover:shadow-2xl"
                    >
                        <p className="text-lg text-center text-gray-700 font-medium">{reason}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
