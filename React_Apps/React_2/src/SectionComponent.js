import React from 'react';

function SectionComponent() {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-center mt-3">Marvel</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://imgs.search.brave.com/UEFfXTGRih4q37ja40nfWvl1tyfWxDdQsykS7T3xRuA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE1/NzIxNzMwL3Bob3Rv/L21hbi1kcmVzc2Vk/LWFzLXNwaWRlcm1h/bi1yZXN0aW5nLWF0/LWNhbWRlbi10b3du/LWxvbmRvbi1lbmds/YW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DY3h0UzF0/Qi1TcnBOM1dJV2tH/WFpTOExBeDFaa3cz/YVNvMDlDQkJVQVIw/PQ"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Spider-Man, also known as Peter Parker, is a superhero with spider-like abilities. He gained his powers after being bitten by a radioactive spider. He is known for his enhanced strength, agility, speed, and the ability to cling to surfaces. He uses his abilities to fight crime in New York City while balancing his personal life as a high school student. 
                </p>
                <a href="https://en.wikipedia.org/wiki/Spider-Man" className="btn btn-primary">Know More About Spider Man</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/FDBRhFxEw7gu_ggC.Jw5Zg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/cinemablend_388/70bb3fde579664d1e74d07baab257e24"
                className="card-img-top"
                alt="..."
                height={276}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Iron Man, also known as Tony Stark, is a fictional superhero appearing in American comic books published by Marvel Comics. He is known for his high-tech suit of armor that grants him superhuman strength, flight, and a variety of weapons. The character is a billionaire industrialist and genius inventor who uses his intellect and resources to protect the world.
                </p>
                <a href="https://en.wikipedia.org/wiki/Iron_Man" className="btn btn-primary">Know More About Iron Man</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://imgs.search.brave.com/AhOoSjHJdgp3aieH-dv8jTjt55Xw6iIkdV9qRdCkQ2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8wLzcv/Yi8zMDQ0MTYtMzg0/MHgyMTYwLWRlc2t0/b3AtNGstY2FwdGFp/bi1hbWVyaWNhLWJh/Y2tncm91bmQtaW1h/Z2UuanBn"
                className="card-img-top"
                height="276"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Captain America, also known as Steve Rogers, is a fictional superhero appearing in American comic books published by Marvel Comics. He is a World War II veteran, a founding member of the Avengers, and widely regarded as Earth's first superhero. Rogers was initially a frail young man who, through a special serum, was transformed into a peak human specimen with enhanced strength, speed, and agility. He fights for American ideals and is a key figure in the Marvel universe, often leading the Avengers and battling various threats. 
                </p>
                <a href="https://en.wikipedia.org/wiki/Captain_America" className="btn btn-primary">Know More About Captain America</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionComponent;
