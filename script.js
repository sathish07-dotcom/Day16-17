const fortData = {
    gandikota: {
        title: "Gandikota Fort",
        history:[ `Gandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th century
           Gandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th centuryGandikota Fort is known as the 'Grand Canyon of India' and was built in the 13th century `],
        travels: ["Jammalamadugu Bus Stand - 15 km", "Kadapa Railway Station - 80 km", "Tirupati Airport - 200 km"],
        hotels: ["Haritha Hotel - 2 km", "AP Tourism Cottages - 3 km"],
        food: ["Ragi Sangati", "Natu Kodi Pulusu"]
    },
    golconda: {
        title: "Golconda Fort",
        history: "Golconda Fort, famous for its acoustics, was the capital of the Qutb Shahi dynasty.",
        travels: ["Hyderabad Bus Stand - 10 km", "Nampally Railway Station - 15 km", "RGI Airport - 30 km"],
        hotels: ["Taj Krishna - 5 km", "ITC Kohenur - 6 km"],
        food: ["Hyderabadi Biryani", "Double Ka Meetha"]
    },
    kondaveedu: {
        title: "Kondaveedu Fort",
        history: "Kondaveedu Fort is a hill fortress built during the Reddy Dynasty in the 14th century.",
        travels: ["Guntur Bus Stand - 25 km", "Guntur Railway Station - 30 km", "Vijayawada Airport - 60 km"],
        hotels: ["Minerva Grand - 30 km", "Fortune Murali Park - 35 km"],
        food: ["Guntur Chicken", "Pesarattu"]
    }
};

function openModal(fortKey) {
    const fort = fortData[fortKey];

    document.getElementById("fortTitle").innerText = fort.title;
    document.getElementById("fortHistory").innerText = fort.history;

    let travelList = document.getElementById("travelList");
    let hotelList = document.getElementById("hotelList");
    let foodList = document.getElementById("foodList");

    travelList.innerHTML = fort.travels.map(item => `<li>${item}</li>`).join("");
    hotelList.innerHTML = fort.hotels.map(item => `<li>${item}</li>`).join("");
    foodList.innerHTML = fort.food.map(item => `<li>${item}</li>`).join("");

    document.getElementById("infoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}