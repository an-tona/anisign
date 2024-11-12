import Header from "@/widgets/Header/Navbar";
import Report from "@/features/Report/Report";
import Footer from "@/shared/ui/Footer/Footer";
import CommentsList from "@/widgets/CommentsList/CommentsList";
import FilterComments from "@/features/FiltersComments/FilterComments";

const Page = () => {
    return (
        <>
            <Header/>
            <Report/>
            <main className="anim-test">
                <FilterComments/>
                <CommentsList/>
            </main>
        </>

    );
};

export default Page;