export const API_URL =  import.meta.env.VITE_API_URL;

export const USER_LOGIN = "/api/users/login";

export const USER_REGISTER = "/api/users/register";

export const GITHUB_AUTH = "/auth/github/callback?code=${code}"

export const GROUP_BASE= "/group"

export const CREATE_GROUP = GROUP_BASE + "/add"

export const JOIN_GROUP =  GROUP_BASE + "/join/${groupId}"

export const READ_ALL_GROUP = GROUP_BASE + "/all"

export const READ_BY_USER_GROUP = GROUP_BASE + "/user"

export const READ_BY_ID = GROUP_BASE + "/${id}"

export const BOARD_BASE = "/board"

export const READ_BOARDS = BOARD_BASE + "/${groupId}/getAll"

export const CREATE_BOARD = BOARD_BASE + "/add/${groupId}"

export const POST_IT_BASE= "/postits"

export const DELETE_POST_IT = POST_IT_BASE + "/${id}"

export const CREATE_POST_IT = POST_IT_BASE + "/${boardId}"

export const READ_POST_IT_BY_BOARD = POST_IT_BASE + "/board/${boardId}"

export const GET_POST_IT_BY_DATE = POST_IT_BASE + "/date/${groupId}?date="

export const USER_PROFILE = "/api/users/me";

export const UPDATE_PROFILE_AVATAR = USER_PROFILE + "/avatar"

export const UPDATE_PROFILE_NAME = USER_PROFILE + "/name"

export const LOGIN_PAGE = "http://localhost:5173/login"

export const SIGNUP_PAGE = "http://localhost:5173/signup"

export const GITHUB_CLIENT_ID = "Ov23liP3FvUqB3NF84xO"

export const GITHUB_REDIRECT = "https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}"

