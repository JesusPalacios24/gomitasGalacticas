const exoplanetsArray = [
    {
        id:1,
      name: "51 Pegasi b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/gasgiant-7.jpg?w=4096&format=jpeg",
      description:
        "51 Pegasi b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.46 Jupiters, it takes 4.2 days to complete one orbit of its star, and is 0.0527 AU from its star. Its discovery was announced in 1995.",
      planet_radius: "1.27 x Jupiter (estimate)",
      planet_type: "Gas Giant",
      discovery_method: "Radial Velocity",
      planet_mass: "0.46 Jupiters",
      discovery_date: 1995,
      orbital_radius: "0.0527 AU",
      orbital_period: "4.2 days",
      eccentricity: 0.01,
      keywords: [
        "gas giant",
        "exoplanet",
        "51 Pegasi b",
        "orbital period",
        "Jupiter mass",
      ],
    },
    {
        id:2,
      name: "Kepler-438 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      description:
        "Kepler-438 b is an Earth-sized exoplanet located about 475 light-years from Earth, in the habitable zone of its star.",
      planet_radius: "1.12 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "1.46 Earths",
      discovery_date: 2015,
      orbital_radius: "0.166 AU",
      orbital_period: "35.2 days",
      eccentricity: 0.03,
      keywords: [
        "super Earth",
        "exoplanet",
        "habitable zone",
        "Kepler-438 b",
        "orbital period",
      ],
    },
    {
        id:3,
      name: "Proxima Centauri b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      description:
        "Proxima Centauri b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.07 Earths, it takes 11.2 days to complete one orbit of its star, and is 0.04856 AU from its star. Its discovery was announced in 2016.",
      planet_radius: "1.03 x Earth (estimate)",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.07 Earths",
      discovery_date: 2016,
      orbital_radius: "0.04856 AU",
      orbital_period: "11.2 days",
      eccentricity: 0.02,
      keywords: [
        "super Earth",
        "Proxima Centauri b",
        "M-type star",
        "orbital period",
        "habitable zone",
      ],
    },
    {
        id:4,
      name: "Kepler-22 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2024/03/Kepler22b.jpg?w=4096&format=jpeg",
      description:
        "A possible ocean world orbiting in the habitable zone—the region around a star where the temperature is right for liquid water, a requirement for life on Earth.",
      planet_radius: "2.1 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "9.1 Earths",
      discovery_date: 2011,
      orbital_radius: "0.812 AU",
      orbital_period: "289.9 days",
      eccentricity: 0.72,
      keywords: [
        "ocean world",
        "habitable zone",
        "Kepler-22 b",
        "super Earth",
        "orbital period",
        "life",
      ],
    },
    {
        id:5,
      name: "K2-18 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      description:
        "K2-18 b is a super Earth exoplanet that orbits an M-type star. Its mass is 8.92 Earths, it takes 32.9 days to complete one orbit of its star, and is 0.1429 AU from its star. Its discovery was announced in 2015.",
      planet_radius: "2.37 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "8.92 Earths",
      discovery_date: 2015,
      orbital_radius: "0.1429 AU",
      orbital_period: "32.9 days",
      eccentricity: 0.2,
      keywords: [
        "super Earth",
        "Kepler K2-18 b",
        "M-type star",
        "orbital period",
        "exoplanet",
      ],
    },
    {
        id:6,
      name: "GJ 1002 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      description:
        "GJ 1002 b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.08 Earths, it takes 10.3 days to complete one orbit of its star, and is 0.0457 AU from its star. Its discovery was announced in 2022.",
      planet_radius: "1.03 x Earth (estimate)",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.08 Earths",
      discovery_date: 2022,
      orbital_radius: "0.0457 AU",
      orbital_period: "10.3 days",
      eccentricity: null,
      keywords: [
        "super Earth",
        "GJ 1002 b",
        "M-type star",
        "orbital period",
        "exoplanet",
      ],
    },
    {
        id:7,
      name: "GJ 1002 c",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      description:
        "GJ 1002 c is a super Earth exoplanet that orbits an M-type star. Its mass is 1.36 Earths, it takes 21.2 days to complete one orbit of its star, and is 0.0738 AU from its star. Its discovery was announced in 2022.",
      planet_radius: "1.1 x Earth (estimate)",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.36 Earths",
      discovery_date: 2022,
      orbital_radius: "0.0738 AU",
      orbital_period: "21.2 days",
      eccentricity: null,
      keywords: [
        "super Earth",
        "GJ 1002 c",
        "M-type star",
        "orbital period",
        "exoplanet",
      ],
    },
    {
        id:8,
      name: "LHS 475 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/terrestrial-4.jpg?w=4096&format=jpeg",
      description:
        "LHS 475 b is a terrestrial exoplanet that orbits an M-type star. Its mass is 0.941 Earths and it takes 2 days to complete one orbit of its star. Its discovery was announced in 2023.",
      planet_radius: "0.991 x Earth",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      planet_mass: "0.941 Earths",
      discovery_date: 2023,
      orbital_radius: "0.02037 AU",
      orbital_period: "2 days",
      eccentricity: 0.0,
      keywords: [
        "terrestrial",
        "LHS 475 b",
        "M-type star",
        "orbital period",
        "exoplanet",
      ],
    },
    {
        id:9,
      name: "GJ 1214 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/neptunelike-8.jpg?w=4096&format=jpeg",
      description:
        "GJ 1214 b is a Neptune-like exoplanet that orbits an M-type star. Its mass is 8.17 Earths, it takes 1.6 days to complete one orbit of its star, and is 0.0149 AU from its star. Its discovery was announced in 2009.",
      planet_radius: "0.244 x Jupiter",
      planet_type: "Neptune-like",
      discovery_method: "Transit",
      planet_mass: "8.17 Earths",
      discovery_date: 2009,
      orbital_radius: "0.01505 AU",
      orbital_period: "1.6 days",
      eccentricity: 0.01,
      keywords: [
        "Neptune-like",
        "GJ 1214 b",
        "M-type star",
        "orbital period",
        "exoplanet",
      ],
    },
    {
        id:10,
      name: "LHS 1140 b",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      description:
        "LHS 1140 b is a super Earth exoplanet that orbits an M-type star. Its mass is 6.08 Earths, it takes 24.7 days to complete one orbit of its star, and is 0.196 AU from its star. Its discovery was announced in 2017.",
      planet_radius: "1.4 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "6.08 Earths",
      discovery_date: 2017,
      orbital_radius: "0.196 AU",
      orbital_period: "24.7 days",
      eccentricity: 0.01,
      keywords: [
        "super Earth",
        "LHS 1140 b",
        "M-type star",
        "orbital period",
        "exoplanet",
      ],
    },
  ];
  
//   console.log(exoplanetsArray);
  

export default exoplanetsArray