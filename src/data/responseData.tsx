// TODO: FOR ALL DTO TYPE => FOR TYPE CHECKING

export type ProjectDto = {
    id: number,
    name: string,
    category: CategoryDto,
    numPerGroup: number,
    user: UserDto,
    roles: ProjectRoleDto[]
}

export type CategoryDto = {
    id: number,
    name: string,
    isDestroyed: boolean,
    roles: RoleDto[]
}

export type AbilityDto = {
    id: number,
    name: string
}

export type UserDto = {
    id: number,
    name: string,
    email: string,
    password: string
}

export type ProjectRoleDto = {
    id: number,
    role: RoleDto,
    numForRole: number
}

export type RoleDto = {
    id: number,
    name: string,
    abilities: string[]
}

export type SurveyDto = {
    id: number,
    name: string,
    project: ProjectDto,
    isPossibleSameRolePreference: boolean,
    minRangeRolePreference: number,
    maxRangeRolePreference: number,
    isPossibleSameAbilityRating: boolean,
    minRangeAbilityRating: number,
    maxRangeAbilityRating: number,
    participants: ParticipantDto[]
}

export type ParticipantDto = {
    id: number,
    studentNumber: number,
    email: string
}

export type PreferMateAnswer = {
    studentNumber: number,
    priority: number
}


export const roleJson = {
    "elements": [
        {
            "type": "matrix",
            "name": "quality",
            "title": "Please indicate how you would like to take the role",
            // {
            //                 "value": 1,
            //                 "text": "1"
            //                 }
            "columns": [
            ],
            // {"value": "affordable", "text": "Product is affordable"}
            "rows": [
            ],
            "alternateRows": true,
            "isAllRowRequired": true
        }
    ],
    "showQuestionNumbers": "off"
};




