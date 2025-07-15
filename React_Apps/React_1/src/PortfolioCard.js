import React from "react";
import "./PortfolioCard.css";

const About = ({ description }) => (
    <section className="portfolio-about">
        <h3>About</h3>
        <p>{description}</p>
    </section>
);

const Skills = ({ skills }) => (
    <section className="portfolio-skills">
        <h3>Skills</h3>
        <ul>
            {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
            ))}
        </ul>
    </section>
);

const Contact = ({ email }) => (
    <section className="portfolio-contact">
        <h3>Contact</h3>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    </section>
);

const PortfolioCard = () => {
    let name = "Bruce Wayne";
    let imgUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/de3mn3j-ae2a13b0-8d86-45c5-8d23-530b81235a5e.png/v1/fill/w_900,h_431/the_batman__2022__logo_png__by_mintmovi3_de3mn3j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMxIiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZTNtbjNqLWFlMmExM2IwLThkODYtNDVjNS04ZDIzLTUzMGI4MTIzNWE1ZS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.QkiAfoqdBwfNqabUzCHyh1571ekyUZO0GS_Cm2hp9gw";
    let description = "The Batman is a 2022 American superhero film based on the DC Comics character Batman. It is the reboot of the Batman film series";
    let skills = ["Detective Work", "Martial Arts", "Stealth", "Technology"];
    let email = "bruce@wayneenterprises.com";

    return (
        <div className="card">
            <img className="portfolio-image" src={imgUrl} alt="Batman Logo" />
            <h2 className="portfolio-name">{name}</h2>
            <About description={description} />
            <Skills skills={skills} />
            <Contact email={email} />
        </div>
    );
};

export default PortfolioCard;
