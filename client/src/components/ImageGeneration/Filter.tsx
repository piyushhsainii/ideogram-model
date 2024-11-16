import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"

const Filter = ({
    styleType,
    setstyleType,
    ModelVersion,
    setModelVersion,
    AspectRatio,
    setAspectRatio,
    Model,
    setModel
}: {
    styleType: string
    setstyleType: React.Dispatch<React.SetStateAction<string>>
    ModelVersion: string
    setModelVersion: React.Dispatch<React.SetStateAction<string>>
    AspectRatio: string
    setAspectRatio: React.Dispatch<React.SetStateAction<string>>
    Model: string
    setModel: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <div className='w-[250px] hidden border-r border-secondaryColor border-opacity-45 mt-8 md:flex flex-col p-4 gap-5'>
            <div className="text-gray-400 font-sans text-center ">
                MODIFY PARAMETERS
            </div>
            <div className="text-gray-300 font-sans text-base text-center relative" >
                <div className="m-3 flex items-center justify-center gap-2">SELECT MODEL <QuestionMarkCircledIcon /> </div>
                <select
                    name="" id="" value={Model}
                    onChange={(e) => setModel(e.target.value)}
                    className="p-2 bg-primmaryColor  shadow-[3px_3px_3px_[1]px_rgba(2,4,4,0.2)] shadow-purple-700 text-gray-300 border border-secondaryColor border-opacity-40 rounded-xl px-2 pl-4 font-sans text-sm"
                >
                    <option value="FAL_AI" >Fal AI</option>
                    <option value="Ideogram"> Ideogram </option>
                </select>
                <div className="text-green-500  px-1 rounded-2xl border bg-opacity-20 bg-green-500 border-green-500 border-opacity-40 absolute bottom-5 text-[0.550rem] left-24">
                    Recommended
                </div>
            </div>
            <div className="text-gray-300 font-sans text-base text-center">
                <div className="my-1  flex items-center justify-center gap-2">
                    CONFIGURE IMAGE <QuestionMarkCircledIcon />
                </div>
                <select
                    className='p-2 m-3 bg-primmaryColor shadow-[3px_3px_3px_[1]px_rgba(2,4,4,0.2)] shadow-purple-700 text-gray-300 border border-secondaryColor border-opacity-40 rounded-xl px-2 pl-4 font-sans text-sm'
                    value={styleType}
                    onChange={(e) => setstyleType(e.target.value)}
                >
                    <option value="GENERAL">GENERAL</option>
                    <option value="REALISTIC">REALISTIC</option>
                    <option value="DESIGN">DESIGN</option>
                    <option value="RENDER_3D">RENDER_3D</option>
                    <option value="ANIME">ANIME</option>
                </select>
            </div>
            <div className="text-gray-300 font-sans text-base text-center">
                <div className="my-1 flex justify-center items-center gap-2 " >SELECT MODEL <QuestionMarkCircledIcon /></div>
                <select
                    className='p-2 shadow-[3px_3px_3px_[1]px_rgba(2,4,4,0.2)] shadow-purple-700 bg-primmaryColor text-gray-300 border border-secondaryColor border-opacity-40 rounded-xl px-2 pl-4 font-sans text-sm'
                    value={ModelVersion}
                    onChange={(e) => setModelVersion(e.target.value)}
                >
                    <option value="V_1">V_1</option>
                    <option value="V_1_TURBO">V_1_TURBO</option>
                    <option value="V_2">V_2</option>
                    <option value="V_2_TURBO">V_2_TURBO</option>
                </select>
            </div>
            <div className="text-gray-300 font-sans text-base text-center">
                <div className="my-1 flex justify-center items-center gap-2">ASPECT RATIO <QuestionMarkCircledIcon /></div>
                <select
                    className='p-2 shadow-[3px_3px_3px_[1]px_rgba(2,4,4,0.2)] shadow-purple-700 bg-primmaryColor text-gray-200 border border-secondaryColor border-opacity-40 rounded-xl px-2 pl-4 font-sans text-sm'
                    value={AspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                >
                    <option className="text-gray-200" value="ASPECT_16_9">ASPECT_16_9</option>
                    <option className="text-gray-200" value="ASPECT_16_10">ASPECT_16_10</option>
                    <option className="text-gray-200" value="ASPECT_10_16">ASPECT_10_16</option>
                    <option className="text-gray-200" value="ASPECT_1_1">ASPECT_1_1</option>
                    <option className="text-gray-200" value="ASPECT_1_3">ASPECT_1_3</option>
                    <option className="text-gray-200" value="ASPECT_2_3">ASPECT_2_3</option>
                    <option className="text-gray-200" value="ASPECT_3_1">ASPECT_3_1</option>
                    <option className="text-gray-200" value="ASPECT_3_2">ASPECT_3_2</option>
                    <option className="text-gray-200" value="ASPECT_3_4">ASPECT_3_4</option>
                    <option className="text-gray-200" value="ASPECT_4_3">ASPECT_4_3</option>
                    <option className="text-gray-200" value="ASPECT_9_16">ASPECT_9_16</option>
                </select>
            </div>

        </div>
    )
}

export default Filter