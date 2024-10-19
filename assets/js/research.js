/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Farilty Detection in Elderly Peoply using Feedback",
    authors:
      "Muhammad Huzaifa, Wajiha Ali",
    conferences:
      "",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/FRAILTY.png",
    citation: {
      vancouver:
        "Muhammad Huzaifa, Wajiha Ali. Farilty Detection in Elderly Peoply using Feedback via Machine Learning and Computervision 2024.",
    },
    abstract:
      "This project aims to develop a non-invasive computer vision system for detecting frailty among older adults in the Japanese community. By employing machine learning algorithms to analyze video data, the system will assess physical parameters such as mobility and joint angles. The objective is to provide an accurate, real-time evaluation of frailty, enabling personalized exercise recommendations. This innovative approach has the potential to improve the quality of life for older adults by facilitating early intervention and targeted rehabilitation strategies.",
    absbox: "absPopup1",
  },

  {
    title: "Fault Detection of an Induction Motor and its analysis using Digital Twin",
    authors:
      "Muhammad Huzaifa, Wajiha Ali",
    conferences:
      "",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/IMDT.jpg",
    citation: {
      vancouver:
        "Muhammad Huzaifa, Wajiha Ali. Fault Detection of an Induction Motor and its analysis using Digital Twin 2024.",
    },
    abstract:
      "This project presents the development of a digital twin for an induction motor, leveraging strategic sensor placement to facilitate real-time monitoring and predictive maintenance. By integrating various sensors—such as vibration, temperature, current, and speed—data is continuously collected to accurately represent the motor's operational characteristics. The digital twin model utilizes advanced data processing techniques, including machine learning algorithms, to analyze performance metrics and identify potential anomalies. This approach not only enhances the understanding of motor behavior but also enables timely interventions, thereby optimizing efficiency and reducing downtime. Ultimately, the digital twin serves as a powerful tool for improving the management and operational reliability of induction motors in industrial applications.",
    absbox: "absPopup2",
  },

  {
    title:
      "7 Element Circular Polarized Antenna",
    authors: "Muhammad Huzaifa, Wajiha Ali",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/HFSS.jpg",
    citation: {
      vancouver:
        "Muhammad Huzaifa, Wajiha Ali. Circular Polarization of a 7 Element Array Antenna 2023.",
    },
    abstract:
      "Enhancing proficiency with ANSYS HFFS, a pivotal tool for antenna design and simulation, is key to deepening insights into RF technology. This experience solidifies skills in electromagnetic simulation, laying a sturdy foundation for future aspirations in this dynamic field.",
    absbox: "absPopup3",
  },

  {
    title:
      "Advancements in Modular Networking: Contributions to Edgecore's CASSINI Project",
    authors:
      "Muhammad Huzaifa, Wajiha Ali",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup4",
    image: "assets/images/research-page/CASSINI.jpg",
    citation: {
      vancouver:
        "Muhammad Huzaifa, Wajiha Ali. Advancements in Modular Networking: Contributions to Edgecore's CASSINI Project 2023.",
    },
    abstract:
      "Working on Edgecore's CASSINI, the world's first modular open networking packet transponder, provided valuable insights into node transmission and VLAN creation. This experience enhanced understanding of computer networks, VLANs, and computer traffic management.",
    absbox: "absPopup4",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
