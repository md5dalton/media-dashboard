import Toggle from "./Toggle"

export default () => (
    <header className="my-9 md:flex md:justify-between">
        <div>
            <h1>Social Media Dashboard</h1>
            <p className="text-sm font-bold text-dark-grayish-blue dark:text-desaturated-blue">Total followers: 23,005</p>
        </div>
        <Toggle />
    </header>
)