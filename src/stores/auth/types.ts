export type AuthStage = {
	authenticating : Boolean
	authenticated : Boolean
	token : String | null,
	token_expiry: String | null
}
