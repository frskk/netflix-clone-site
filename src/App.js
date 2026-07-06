import { Route, Routes } from "react-router-dom";
import { MyListProvider } from "./context/MyListContext";
import { ModalProvider } from "./context/ModalContext";
import Modal from "./components/Modal";
import Landing from "./pages/Landing";
import Profiles from "./pages/Profiles";
import Browse from "./pages/Browse";
import MyList from "./pages/MyList";
import Search from "./pages/Search";

function App() {
  return (
    <MyListProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/browse" element={<Browse filter="all" />} />
          <Route
            path="/browse/tv"
            element={<Browse filter="tv" heading="TV Shows" />}
          />
          <Route
            path="/browse/movies"
            element={<Browse filter="movies" heading="Movies" />}
          />
          <Route
            path="/browse/new"
            element={<Browse filter="all" heading="New & Popular" />}
          />
          <Route path="/browse/my-list" element={<MyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Landing />} />
        </Routes>

        {/* Global details modal, portal-free but fixed/overlay */}
        <Modal />
      </ModalProvider>
    </MyListProvider>
  );
}

export default App;
