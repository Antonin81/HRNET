import Modal from "../../components/Modal/Modal";
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm";

function HomePage() {
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="/employees">View Current Employees</a>
                <h2>Create Employee</h2>
                <CreateEmployeeForm />
            </div>
            <Modal />
        </>
    );
}

export default HomePage;
