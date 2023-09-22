import React, { useState } from "react";

export default function Portfolio() {
  let [data, setData] = useState(
    [
      { img: 'https://routeegy.github.io/startFramework/assets/images/poert1.png', id: 'img1' },
      { img: 'https://routeegy.github.io/startFramework/assets/images/port2.png', id: 'img2' },
      { img: 'https://routeegy.github.io/startFramework/assets/images/port3.png', id: 'img3' },
      { img: 'https://routeegy.github.io/startFramework/assets/images/poert1.png', id: 'img4' },
      { img: 'https://routeegy.github.io/startFramework/assets/images/port2.png', id: 'img5' },
      { img: 'https://routeegy.github.io/startFramework/assets/images/port3.png', id: 'img6' },

    ]
  )

  return <>
    <section className='portfolio py-5 text-center'>
      <h2 className='fw-bolder mb-5'>
        PORTFOLIO COMPONENT
      </h2>
      <i class="fa-solid fa-star text-black" ></i>

      <div className="container">

        <div className="row">
          {data.map((item) => (
            <>
              <div className="col-md-4">
                <div className="layout m-3">
                  <img src={item.img} alt="" className="w-100  rounded-3" />
                  <div
                    data-bs-toggle="modal"
                    data-bs-target={"#"+item.id}
                    className="item rounded-3 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus  "></i>
                  </div>

                </div>

              </div>
            </>
          ))}

          {data.map((item) =>
            <>
              <div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">

                    <div className="modal-body p-0 rounded-2">
                      <img src={item.img} className="w-100 rounded-2" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}
        </div>
      </div>
    </section>
  </>
}
