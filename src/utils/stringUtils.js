export const truncate = (string, limit = 100) => {
	return string?.length > limit ? `${string.substr(0, limit - 1)}...` : string;
};
