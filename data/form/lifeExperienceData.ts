const d = new Date()

export const lifeExperienceFormHeaders = [
    {title: `Misogi: The Defining Experience For ${d.getFullYear()}`, name:"misogi", inputField: 
        [
            {placeholder: "Run a Half Marathon", name:"misogiOne"}
        ]
    },
    {title: "Mini Adventures: Experiences You Wouldn't Normally Do", name:"adventures", inputField: 
        [
            {placeholder: "Try winter swim", name:"adventureOne"},
            {placeholder: "Climb mountain X", name:"adventureTwo"},
            {placeholder: "Visit country Y", name:"adventureThree"},
            {placeholder: "Try sports Z", name:"adventureFour"},
            {placeholder: "Staycation at place A", name:"adventureFive"},
            {placeholder: "Ski in country B", name:"adventureSix"},
        ]
    },
]