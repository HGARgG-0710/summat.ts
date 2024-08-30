export declare interface Summat<Type = any> {
	[x: string | symbol | number]: Type
}

export declare type SummatFunction<This = any, In = any, Out = any> = Summat &
	((this: This, ...args: In[]) => Out)

export declare type SummatIterable<Type = any> = Iterable<Type> & Summat
