import MoreDetail from "./MoreDetail";
import renderButtons from "./Buttons";


const renderCard = (item) => (
    <div
      key={item.title}
      className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex  project-card"
    >
      <div className="card flex-grow-1 d-flex flex-column">
        {item.image && (
          <div className="card-image-container">
            <img
              className="card-img-top w-100 h-100 card-image "
              alt={item.title}
              src={item.image}
              key={item.title}
              style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
            />
          </div>
        )}
        <div className="card-body">
          <h4 className=" project-title ">{item.title}</h4>
          <div className="tags">
            <div className="list-tag">
              {item.tags.map((tag) => (
                <p className="tag" key={tag}> {tag} </p>
              ))}
            </div>
            <div className="list-tag" >
              {item.tags.map((tag) => (
                <p className="tag" key={tag + "3"}> {tag} </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          {renderButtons(item)}
        </div>

        <MoreDetail description={item.description}></MoreDetail>
      </div>
    </div>
  );

export default renderCard;