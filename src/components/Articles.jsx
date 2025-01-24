import React from "react";

function Articles() {
    const projectStyle = {
        "padding":"2rem"
    };
    return(
        <main>
         <h1 className="p-8 text-center text-[24px]">Decouvre mon univers, mes pensees</h1>
         <p className="text-justify ">Je developpe des applications, je prends soins de mes cheveux naturels mais c'est pas tout...
                J'aime par dessus tout lire et ecrire. Je t'invite a decouvrir cet autre aspect de moi.
                J'ecris sur tous type de sujet interessant  mais surtout sur la spiritualite, les valeurs et les moeurs de notre societe.
                N'hesite pas a me suivre pour ne rien manquer de mes prochains articles.
            </p>
            <div className="grid grid-rows-2 grid-flow-col gap-10">
            <div className="bg-gray-100 rounded-lg" style={projectStyle}> 
                <span className="text-gray-400 text-[15px] text-left">Date</span>
                <h2 className="text-center mb-2 text-[20px]"> E-commerce web App</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis, vel, fugiat commodi repudiandae corporis repellat soluta nemo unde voluptatibus ipsum voluptate sint vitae a eaque sapiente ullam quia assumenda.</p>
                <a href="https://angular-store-project-pi.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">Read More...</button></a>
            </div>
            <div className="bg-gray-100 rounded-lg" style={projectStyle}>
                <span className="text-gray-400 text-[15px] text-left">Date</span>
                <h2 className="text-center mb-2 text-[20px]">Book library App</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, ullam. Explicabo est reprehenderit, porro quae voluptatem quis libero nesciunt eius doloribus perferendis officiis delectus saepe sunt sapiente placeat soluta eos.</p>
                <a href="https://book-library-fe-capstone.vercel.app/" target="blank"><button className="p-2 w-1/5 bg-teal-800 text-white hover:bg-teal-600">Read More...</button></a>
            </div>
            </div>
        </main>
    );
}
export default Articles;