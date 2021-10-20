import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {
  const [sortedAscending, setSortedAscending] = useState(true);
  const [sortedColumnIndex, setSortedColumnIndex] = useState(null);
  const [rows] = useState([
    ["Hughie", "Fice", "hfice0@yolasite.com"],
    ["Graig", "Hallibone", "ghallibone1@bloglovin.com"],
    ["Etan", "St. Aubyn", "estaubyn2@paginegialle.it"],
    ["Ephrayim", "Harrowsmith", "eharrowsmith3@msn.com"],
    ["Myrilla", "Musk", "mmusk4@opera.com"],
    ["Ardelis", "Tole", "atole5@networksolutions.com"],
    ["Floyd", "Digan", "fdigan6@miitbeian.gov.cn"],
    ["Sonny", "Latey", "slatey7@mapquest.com"],
    ["Allan", "Baser", "abaser8@hp.com"],
    ["Hersh", "Gun", "hgun9@com.com"],
    ["Hendrick", "Yacob", "hyacoba@squidoo.com"],
    ["Daile", "Van der Baaren", "dvanderbaarenb@biglobe.ne.jp"],
    ["Robbi", "Meddick", "rmeddickc@blogger.com"],
    ["Mel", "Pithcock", "mpithcockd@telegraph.co.uk"],
    ["Katuscha", "Marfe", "kmarfee@usda.gov"],
    ["Orson", "Kenealy", "okenealyf@skype.com"],
    ["Tisha", "Growy", "tgrowyg@chicagotribune.com"],
    ["Norah", "Airton", "nairtonh@google.co.uk"],
    ["Neale", "Dunnan", "ndunnani@japanpost.jp"],
    ["Faina", "Higounet", "fhigounetj@sun.com"],
    ["Jerrylee", "Brosius", "jbrosiusk@technorati.com"],
    ["Torie", "Nix", "tnixl@creativecommons.org"],
    ["Marline", "Matches", "mmatchesm@nps.gov"],
    ["Myra", "Teasey", "mteaseyn@nyu.edu"],
    ["Anna", "Geraudy", "ageraudyo@bandcamp.com"],
    ["Temp", "Belding", "tbeldingp@ucla.edu"],
    ["Alisun", "Hartland", "ahartlandq@geocities.jp"],
    ["Skipp", "Mowsley", "smowsleyr@sina.com.cn"],
    ["Ami", "Strapp", "astrapps@vkontakte.ru"],
    ["Teodor", "Dayley", "tdayleyt@gnu.org"],
    ["Karol", "Stribling", "kstriblingu@google.de"],
    ["Malory", "Gilkison", "mgilkisonv@photobucket.com"],
    ["Virgina", "O' Kelleher", "vokelleherw@gov.uk"],
    ["Urbano", "Mulloch", "umullochx@over-blog.com"],
    ["Ermengarde", "Foyle", "efoyley@java.com"],
    ["Neely", "Asals", "nasalsz@economist.com"],
    ["Glynn", "Seacroft", "gseacroft10@exblog.jp"],
    ["Anabal", "Tomankowski", "atomankowski11@163.com"],
    ["Louella", "Sturror", "lsturror12@businessweek.com"],
    ["Gates", "Crangle", "gcrangle13@bigcartel.com"],
    ["Richmond", "Castleton", "rcastleton14@timesonline.co.uk"],
    ["Nevsa", "Amner", "namner15@irs.gov"],
    ["Margaret", "Winchcombe", "mwinchcombe16@elegantthemes.com"],
    ["Dori", "Jime", "djime17@bandcamp.com"],
    ["Prent", "Gable", "pgable18@sina.com.cn"],
    ["Dannie", "Fanning", "dfanning19@sfgate.com"],
    ["Worth", "Kupisz", "wkupisz1a@marketwatch.com"],
    ["Kore", "Becks", "kbecks1b@biblegateway.com"],
    ["Gwennie", "Burgan", "gburgan1c@jigsy.com"],
    ["Hakeem", "Konzel", "hkonzel1d@istockphoto.com"],
    ["Fredia", "Fuller", "ffuller1e@zimbio.com"],
    ["Clementine", "Maunton", "cmaunton1f@vistaprint.com"],
    ["Hanny", "Cottam", "hcottam1g@geocities.com"],
    ["Red", "Dreng", "rdreng1h@w3.org"],
    ["Dacey", "Cleary", "dcleary1i@samsung.com"],
    ["Alexio", "Croster", "acroster1j@sbwire.com"],
    ["Sandie", "Haensel", "shaensel1k@merriam-webster.com"],
    ["Jackelyn", "Cobleigh", "jcobleigh1l@printfriendly.com"],
    ["Scotti", "Issacoff", "sissacoff1m@taobao.com"],
    ["Bamby", "Culwen", "bculwen1n@fc2.com"],
    ["Paulina", "Mabbett", "pmabbett1o@nature.com"],
    ["Brit", "Matic", "bmatic1p@paginegialle.it"],
    ["Talia", "Grob", "tgrob1q@ft.com"],
    ["Cam", "Braunds", "cbraunds1r@constantcontact.com"],
    ["Horatia", "MacCarrick", "hmaccarrick1s@home.pl"],
    ["Deeyn", "Carlon", "dcarlon1t@mozilla.com"],
    ["Alessandro", "Dabell", "adabell1u@amazon.co.uk"],
    ["Errol", "Thorndycraft", "ethorndycraft1v@goodreads.com"],
    ["Ranice", "Witty", "rwitty1w@joomla.org"],
    ["Hallie", "Sivewright", "hsivewright1x@buzzfeed.com"],
    ["Tyne", "Barnbrook", "tbarnbrook1y@sciencedirect.com"],
    ["Maybelle", "Winship", "mwinship1z@drupal.org"],
    ["Donnajean", "Kolinsky", "dkolinsky20@mail.ru"],
    ["Carleton", "Farrens", "cfarrens21@about.com"],
    ["Marlena", "Dyble", "mdyble22@bing.com"],
    ["Daisey", "Howchin", "dhowchin23@walmart.com"],
    ["Billie", "Naile", "bnaile24@privacy.gov.au"],
    ["Daffy", "Juschke", "djuschke25@digg.com"],
    ["Normy", "Masey", "nmasey26@latimes.com"],
    ["Graehme", "Girkin", "ggirkin27@slideshare.net"],
    ["Papageno", "Addionisio", "paddionisio28@xinhuanet.com"],
    ["Abdel", "Cesco", "acesco29@apple.com"],
    ["Adlai", "Russo", "arusso2a@de.vu"],
    ["Darcee", "Blowfield", "dblowfield2b@facebook.com"],
    ["Julian", "Danelut", "jdanelut2c@miibeian.gov.cn"],
    ["Briny", "Lunnon", "blunnon2d@dion.ne.jp"],
    ["Ingrim", "O'Gaven", "iogaven2e@linkedin.com"],
    ["Stafani", "Silburn", "ssilburn2f@sitemeter.com"],
    ["Mira", "Grono", "mgrono2g@reddit.com"],
    ["Romonda", "Klimov", "rklimov2h@usnews.com"],
    ["Cherilyn", "Canacott", "ccanacott2i@addthis.com"],
    ["Davidde", "Gifford", "dgifford2j@mozilla.com"],
    ["Karleen", "Blenkensop", "kblenkensop2k@army.mil"],
    ["Friedrich", "Gunter", "fgunter2l@google.co.jp"],
    ["Delphinia", "Pencott", "dpencott2m@latimes.com"],
    ["Doreen", "Bail", "dbail2n@cnet.com"],
    ["Romona", "Bernlin", "rbernlin2o@meetup.com"],
    ["Rutger", "Petz", "rpetz2p@springer.com"],
    ["Rhodie", "Rylstone", "rrylstone2q@arizona.edu"],
    ["Minna", "Stiff", "mstiff2r@fema.gov"]
  ]);
  const [displayedRows, setDisplayedRows] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const displayedDataShouldChange = () => {
    let displayedRows;

    // First we sort the rows (if sorting is set)
    if (sortedColumnIndex === null) {
      displayedRows = [...rows];
    } else {
      const newSorting = [...rows];
      const sortDirection = sortedAscending ? 1 : -1;
      newSorting.sort((a, b) =>
        a[sortedColumnIndex] > b[sortedColumnIndex]
          ? sortDirection
          : -1 * sortDirection
      );
      displayedRows = newSorting;
    }

    // Lastly we slice out the items needed for the current page
    if (rows.length > itemsPerPage) {
      displayedRows = displayedRows.slice(
        (currentPage - 1) * itemsPerPage,
        (currentPage - 1) * itemsPerPage + itemsPerPage
      );
    }

    setDisplayedRows(displayedRows);
  };

  useEffect(displayedDataShouldChange, [
    rows,
    sortedAscending,
    sortedColumnIndex,
    currentPage,
    itemsPerPage
  ]);

  const handleSortColumnClicked = (clickedIndex) => {
    if (clickedIndex !== sortedColumnIndex) {
      setSortedColumnIndex(clickedIndex);
      setSortedAscending(true);
    } else {
      setSortedAscending(!sortedAscending);
    }
  };

  useEffect(() => {
    if (itemsPerPage * currentPage > rows.length) {
      setCurrentPage(Math.ceil(rows.length / itemsPerPage));
    }
  }, [itemsPerPage, rows]);

  return (
    <>
      <h1>Table test</h1>
      <Table
        headers={["Fornavn", "Efternavn", "Email"]}
        rows={displayedRows}
        sortableColumns={[0, 1]}
        sortedColumnIndex={sortedColumnIndex}
        sortedAscending={sortedAscending}
        onSortableColumnClicked={handleSortColumnClicked}
      />
      <Pagination
        totalNumberOfItems={rows.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPagingChanged={(e) => {
          setItemsPerPage(e.itemsPerPage);
          setCurrentPage(e.currentPage);
        }}
      />
    </>
  );
}

export default App;
