"use client";
import React from "react";

function Privacy() {

    return (
        <>
        <style jsx>{`
            .privacy-policy {
                padding: 20px;
                background-color: #1a1a1a
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .privacy-policy-header {
                margin-bottom: 20px;
            }
            .privacy-policy-header h1 {
                font-size: 2em;
                margin-bottom: 10px;
                color: #fff;
            }
            .privacy-policy-header p {
                font-size: 1em;
                color: #fff;
            }
            .privacy-policy-content {
                font-size: 1em;
                line-height: 1.6;
                color: #fff;
            }
        `}</style>
            <div className="privacy-policy">
                <div className="privacy-policy-header">
                <h1>Privacy Policy</h1>
                <p>Last updated: October 01, 2023</p>
                </div>
                <div className="privacy-policy-content">
                    <h4>Background and Objective</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum autem architecto, ipsam assumenda tempora. Modi non molestiae amet deserunt atque debitis aliquid aspernatur velit molestias, alias distinctio placeat maxime?
                    Suscipit praesentium pariatur quam nulla nam dolore laudantium illo, molestiae error tempora nobis sunt consequuntur amet aut omnis totam quidem ex sint doloremque nihil minus? Suscipit omnis delectus accusamus sit?
                    Soluta sed, quis cumque minima repellendus voluptates. Cum autem explicabo ratione atque non eius animi voluptate, id voluptatibus velit, laborum deleniti optio? Quidem ipsa consequatur nostrum blanditiis quisquam eum illo.
                    Incidunt, eum? Delectus reprehenderit nam, quam culpa facere, nulla eum inventore in itaque debitis sunt libero pariatur suscipit dicta? Quo, error nam! Dicta quasi rem placeat similique modi odit et.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum totam, rerum ex, eum, explicabo asperiores pariatur officiis voluptatibus distinctio et minus sapiente exercitationem quod ratione mollitia ipsam dicta ad ducimus!
                Perferendis iste nam itaque ducimus fugiat culpa quam deserunt, exercitationem quo veniam expedita ad sequi minima natus, hic voluptatibus rem rerum, quae iusto. Nisi impedit ipsum saepe harum ea atque.
                Aliquid porro corporis dignissimos, nesciunt velit odio quis eos! Ipsum temporibus maxime quasi, repudiandae dolor, nobis molestiae officia fugiat nisi a deserunt laborum culpa quisquam id. Tenetur ullam ipsam placeat?</p>
                
                </div>

            </div>
        </>
    );
}

export default Privacy;

