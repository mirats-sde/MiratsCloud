import "./LinkCards.css"

function LinkCards({ linkHeadline, linkBody }) {
  return (
      <div className="card-inner">
        <a href="www.google.com">
          <div className="link-headline">
            <p>{linkHeadline}</p>
          </div>
          <div className="link-body">
            <p>{linkBody}</p>
          </div>
        </a>
      </div>
  );
}

export default LinkCards;
