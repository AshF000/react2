
import Button from './Button';
import Header from './Header';
import Input from './Input';
import Tasks from './TaskCard';



const Mainboard = () => {


    return (
        <div className='flex-1 bg-[#f5f5f5] p-13'>
            <Header headTitle={"To - Do List"} />
            <div className='w-[80%] mx-auto flex justify-evenly items-center'>
                <Input width={"w-[60%]"} />
                <Button width={"w-20%"} instruction={"Add"} />
                <Button width={"w-20%"} instruction={"Search"} />
            </div>

            <div>
                <Tasks />
            </div>



        </div>
    );
};

export default Mainboard;
