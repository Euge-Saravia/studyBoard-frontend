export const API_URL =  import.meta.env.VITE_API_URL;

export const USER_LOGIN = "/api/users/login";

export const USER_REGISTER = "/api/users/register";

export const GROUP_BASE= "/board"

export const CREATE_GROUP = GROUP_BASE + "/add"

export const READ_ALL_GROUP = GROUP_BASE + "/all"

export const READ_BY_ID = GROUP_BASE + "/{id}"

export const BOARD_BASE = "/board"

export const READ_BOARDS = BOARD_BASE + "/{groupId}/getAll"

export const CREATE_BOARD = BOARD_BASE + "/{groupId}/add"