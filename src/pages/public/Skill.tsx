import { companies } from '../../lib/db/company'
import { workExperience } from '../../lib/db/type_experience'
import { experience, schedule } from '../../lib/db/experience'
import dayjs from 'dayjs'

const Skill = () => {
    return (
        <div className="content">
            <div className="block m-auto text-center w-full container-title">
                <h1 className="letter-spacing-1">Experiencia</h1>
            </div>

            <div className="grid grid-cols-1 lg:place-items-start  lg:grid-cols-4 gap-5">
                <div className="flex lg:flex-col md:justify-center md:gap-8  lg:gap-5">
                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#025a4e]">Tipo</h3>
                        <span>{workExperience}</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#025a4e]">Cronograma</h3>
                        <span>
                        {schedule()}
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#025a4e]">Empresas</h3>
                        <span className='flex gap-3'>
                            {
                                companies.map((comp) =>{
                                    if(comp.isImg) {
                                        return(
                                             <div className='flex items-center justify-center size-8 rounded-full'>
                                                <img
                                                    className='w-full h-full object-contain'
                                                    src={comp.img}
                                                    alt="logo-microcash"
                                                />
                                            </div>
                                        )
                                    }else{
                                        return(
                                            <div 
                                                dangerouslySetInnerHTML={{ __html: comp.img }}
                                                className='flex items-center justify-center size-8 rounded-full company-icon'
                                            ></div>
                                        )
                                    }
                                })
                            }
                        </span>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <div className="flex flex-col gap-5">
                        {
                            experience.filter((exp) => exp.typeExperience === workExperience).map((exp) => {
                                return (
                                    <div className="card !bg-transparent card-flat">
                                        <div className="grid grid-cols-5">
                                            <div className='text-sm text-green-300 col-span-1 uppercase mt-3'>
                                                {dayjs(exp.start_date).format('MMM YYYY') } - <span> {exp.is_active ? 'Presente' : dayjs(exp.end_date).format('MMM YYYY') } </span> 
                                            </div>
                                            <div className='col-span-4'>
                                                <h3 className='text-lg text-[#025a4e] leading-8'>{exp.title} - {exp.company}</h3>
                                                <p className='text-[14px] mb-3'>{exp.description}</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {
                                                        exp.skills.map((s) => (
                                                            <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                                                <s.icon stroke={2} color="#025a4e" size={18} />
                                                                <span className='text-xs font-bold text-[#025a4e]'>{s.name}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill 