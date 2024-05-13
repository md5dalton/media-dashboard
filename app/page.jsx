import User from "@/components/User"
import UList from "@/components/UList"
import { details, users } from "@/data"
import Details from "@/components/Details"

import "./page.sass"

export default () => (
    <div className="space-y-10">
        <UList
            items={users}
            itemHandler={item => <User {...item} />}
        />
        <div className="overview">
            <h2>Overview - Today</h2>
            <UList
                items={details}
                itemHandler={item => <Details {...item} />}
            />
        </div>
    </div>
)