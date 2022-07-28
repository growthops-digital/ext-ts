type Success<T> = {
	type: 'success';
	data: T;
};

type Failure = {
	type: 'failure';
	message: string;
	data?: unknown;
};

type Result<T> = Failure | Success<T>;

const isSuccess = <T>(result: Result<T>): result is Success<T> => result.type === 'success';

const isFailure = <T>(result: Result<T>): result is Failure => result.type === 'failure';

const success = <T>(data: T): Success<T> => ({
	type: 'success',
	data,
});

const failure = (message: string, data?: unknown): Failure => ({
	type: 'failure',
	message,
	data,
});

const resultFromPromise = async <T, J>(
	promise: Promise<T>,
	formatter: (data: T) => J,
	errorHandler = (data: unknown) => ({message: 'Unknown error occured', data}),
): Promise<Result<J>> => {
	try {
		const response = await promise;
		const data = formatter(response);

		return success(data);
	} catch (error: unknown) {
		const {message, data} = errorHandler(error);

		return failure(message, data);
	}
};

export {
	isSuccess,
	isFailure,
	success,
	failure,
	resultFromPromise,
};

export type {
	Result,
	Success,
	Failure,
};
