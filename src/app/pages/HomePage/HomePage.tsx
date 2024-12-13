import Modal from "../../components/Modal/Modal";
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm";

function HomePage() {
    return (
        <>
            <main>
                <div className="title">
                    <h1>HRnet</h1>
                    <a className="page-link" href="/employees">
                        View Current Employees
                    </a>
                </div>
                <div className="container">
                    <h2>Create Employee</h2>
                    <CreateEmployeeForm />
                </div>
                <Modal />
            </main>
        </>
    );
}

export default HomePage;
