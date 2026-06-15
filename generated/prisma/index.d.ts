
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Costume
 * 
 */
export type Costume = $Result.DefaultSelection<Prisma.$CostumePayload>
/**
 * Model CostumeImage
 * 
 */
export type CostumeImage = $Result.DefaultSelection<Prisma.$CostumeImagePayload>
/**
 * Model Pret
 * 
 */
export type Pret = $Result.DefaultSelection<Prisma.$PretPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Epoque: {
  AVANT_1900: 'AVANT_1900',
  ANTIQUITE: 'ANTIQUITE',
  MOYEN_AGE: 'MOYEN_AGE',
  RENAISSANCE: 'RENAISSANCE',
  E17EME: 'E17EME',
  E18EME: 'E18EME',
  E1800_1850: 'E1800_1850',
  E1850_1900: 'E1850_1900',
  E1900_1910: 'E1900_1910',
  E1910_1920: 'E1910_1920',
  E1920_1930: 'E1920_1930',
  E1930_1940: 'E1930_1940',
  E1940_1950: 'E1940_1950',
  E1950_1960: 'E1950_1960',
  E1960_1970: 'E1960_1970',
  E1970_1980: 'E1970_1980',
  E1980_1990: 'E1980_1990',
  E1990_2000: 'E1990_2000',
  E2000_2010: 'E2000_2010',
  E2010_2020: 'E2010_2020',
  E2020_PRESENT: 'E2020_PRESENT',
  INCLASSABLE: 'INCLASSABLE'
};

export type Epoque = (typeof Epoque)[keyof typeof Epoque]


export const Etat: {
  NEUF: 'NEUF',
  BON: 'BON',
  USE: 'USE',
  A_REPARER: 'A_REPARER',
  A_NETTOYER: 'A_NETTOYER',
  A_FABRIQUER: 'A_FABRIQUER'
};

export type Etat = (typeof Etat)[keyof typeof Etat]


export const StatutPret: {
  EN_COURS: 'EN_COURS',
  RENDU: 'RENDU',
  EN_RETARD: 'EN_RETARD'
};

export type StatutPret = (typeof StatutPret)[keyof typeof StatutPret]


export const Role: {
  GESTIONNAIRE: 'GESTIONNAIRE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Epoque = $Enums.Epoque

export const Epoque: typeof $Enums.Epoque

export type Etat = $Enums.Etat

export const Etat: typeof $Enums.Etat

export type StatutPret = $Enums.StatutPret

export const StatutPret: typeof $Enums.StatutPret

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Costumes
 * const costumes = await prisma.costume.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Costumes
   * const costumes = await prisma.costume.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.costume`: Exposes CRUD operations for the **Costume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Costumes
    * const costumes = await prisma.costume.findMany()
    * ```
    */
  get costume(): Prisma.CostumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.costumeImage`: Exposes CRUD operations for the **CostumeImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CostumeImages
    * const costumeImages = await prisma.costumeImage.findMany()
    * ```
    */
  get costumeImage(): Prisma.CostumeImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pret`: Exposes CRUD operations for the **Pret** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prets
    * const prets = await prisma.pret.findMany()
    * ```
    */
  get pret(): Prisma.PretDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Costume: 'Costume',
    CostumeImage: 'CostumeImage',
    Pret: 'Pret',
    User: 'User',
    PasswordResetToken: 'PasswordResetToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "costume" | "costumeImage" | "pret" | "user" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Costume: {
        payload: Prisma.$CostumePayload<ExtArgs>
        fields: Prisma.CostumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CostumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CostumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>
          }
          findFirst: {
            args: Prisma.CostumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CostumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>
          }
          findMany: {
            args: Prisma.CostumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>[]
          }
          create: {
            args: Prisma.CostumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>
          }
          createMany: {
            args: Prisma.CostumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CostumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>[]
          }
          delete: {
            args: Prisma.CostumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>
          }
          update: {
            args: Prisma.CostumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>
          }
          deleteMany: {
            args: Prisma.CostumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CostumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CostumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>[]
          }
          upsert: {
            args: Prisma.CostumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumePayload>
          }
          aggregate: {
            args: Prisma.CostumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostume>
          }
          groupBy: {
            args: Prisma.CostumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CostumeCountArgs<ExtArgs>
            result: $Utils.Optional<CostumeCountAggregateOutputType> | number
          }
        }
      }
      CostumeImage: {
        payload: Prisma.$CostumeImagePayload<ExtArgs>
        fields: Prisma.CostumeImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CostumeImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CostumeImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>
          }
          findFirst: {
            args: Prisma.CostumeImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CostumeImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>
          }
          findMany: {
            args: Prisma.CostumeImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>[]
          }
          create: {
            args: Prisma.CostumeImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>
          }
          createMany: {
            args: Prisma.CostumeImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CostumeImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>[]
          }
          delete: {
            args: Prisma.CostumeImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>
          }
          update: {
            args: Prisma.CostumeImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>
          }
          deleteMany: {
            args: Prisma.CostumeImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CostumeImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CostumeImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>[]
          }
          upsert: {
            args: Prisma.CostumeImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostumeImagePayload>
          }
          aggregate: {
            args: Prisma.CostumeImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostumeImage>
          }
          groupBy: {
            args: Prisma.CostumeImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostumeImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CostumeImageCountArgs<ExtArgs>
            result: $Utils.Optional<CostumeImageCountAggregateOutputType> | number
          }
        }
      }
      Pret: {
        payload: Prisma.$PretPayload<ExtArgs>
        fields: Prisma.PretFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PretFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PretFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>
          }
          findFirst: {
            args: Prisma.PretFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PretFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>
          }
          findMany: {
            args: Prisma.PretFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>[]
          }
          create: {
            args: Prisma.PretCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>
          }
          createMany: {
            args: Prisma.PretCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PretCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>[]
          }
          delete: {
            args: Prisma.PretDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>
          }
          update: {
            args: Prisma.PretUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>
          }
          deleteMany: {
            args: Prisma.PretDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PretUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PretUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>[]
          }
          upsert: {
            args: Prisma.PretUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PretPayload>
          }
          aggregate: {
            args: Prisma.PretAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePret>
          }
          groupBy: {
            args: Prisma.PretGroupByArgs<ExtArgs>
            result: $Utils.Optional<PretGroupByOutputType>[]
          }
          count: {
            args: Prisma.PretCountArgs<ExtArgs>
            result: $Utils.Optional<PretCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    costume?: CostumeOmit
    costumeImage?: CostumeImageOmit
    pret?: PretOmit
    user?: UserOmit
    passwordResetToken?: PasswordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CostumeCountOutputType
   */

  export type CostumeCountOutputType = {
    prets: number
    images: number
  }

  export type CostumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prets?: boolean | CostumeCountOutputTypeCountPretsArgs
    images?: boolean | CostumeCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * CostumeCountOutputType without action
   */
  export type CostumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeCountOutputType
     */
    select?: CostumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CostumeCountOutputType without action
   */
  export type CostumeCountOutputTypeCountPretsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PretWhereInput
  }

  /**
   * CostumeCountOutputType without action
   */
  export type CostumeCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostumeImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Costume
   */

  export type AggregateCostume = {
    _count: CostumeCountAggregateOutputType | null
    _avg: CostumeAvgAggregateOutputType | null
    _sum: CostumeSumAggregateOutputType | null
    _min: CostumeMinAggregateOutputType | null
    _max: CostumeMaxAggregateOutputType | null
  }

  export type CostumeAvgAggregateOutputType = {
    quantiteTotal: number | null
    quantiteDispo: number | null
  }

  export type CostumeSumAggregateOutputType = {
    quantiteTotal: number | null
    quantiteDispo: number | null
  }

  export type CostumeMinAggregateOutputType = {
    id: string | null
    nom: string | null
    epoque: $Enums.Epoque | null
    description: string | null
    taille: string | null
    couleur: string | null
    matiere: string | null
    etat: $Enums.Etat | null
    quantiteTotal: number | null
    quantiteDispo: number | null
    emplacement: string | null
    proprietaire: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CostumeMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    epoque: $Enums.Epoque | null
    description: string | null
    taille: string | null
    couleur: string | null
    matiere: string | null
    etat: $Enums.Etat | null
    quantiteTotal: number | null
    quantiteDispo: number | null
    emplacement: string | null
    proprietaire: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CostumeCountAggregateOutputType = {
    id: number
    nom: number
    epoque: number
    description: number
    taille: number
    couleur: number
    matiere: number
    etat: number
    quantiteTotal: number
    quantiteDispo: number
    emplacement: number
    proprietaire: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CostumeAvgAggregateInputType = {
    quantiteTotal?: true
    quantiteDispo?: true
  }

  export type CostumeSumAggregateInputType = {
    quantiteTotal?: true
    quantiteDispo?: true
  }

  export type CostumeMinAggregateInputType = {
    id?: true
    nom?: true
    epoque?: true
    description?: true
    taille?: true
    couleur?: true
    matiere?: true
    etat?: true
    quantiteTotal?: true
    quantiteDispo?: true
    emplacement?: true
    proprietaire?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CostumeMaxAggregateInputType = {
    id?: true
    nom?: true
    epoque?: true
    description?: true
    taille?: true
    couleur?: true
    matiere?: true
    etat?: true
    quantiteTotal?: true
    quantiteDispo?: true
    emplacement?: true
    proprietaire?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CostumeCountAggregateInputType = {
    id?: true
    nom?: true
    epoque?: true
    description?: true
    taille?: true
    couleur?: true
    matiere?: true
    etat?: true
    quantiteTotal?: true
    quantiteDispo?: true
    emplacement?: true
    proprietaire?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CostumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Costume to aggregate.
     */
    where?: CostumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumes to fetch.
     */
    orderBy?: CostumeOrderByWithRelationInput | CostumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CostumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Costumes
    **/
    _count?: true | CostumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CostumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CostumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostumeMaxAggregateInputType
  }

  export type GetCostumeAggregateType<T extends CostumeAggregateArgs> = {
        [P in keyof T & keyof AggregateCostume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostume[P]>
      : GetScalarType<T[P], AggregateCostume[P]>
  }




  export type CostumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostumeWhereInput
    orderBy?: CostumeOrderByWithAggregationInput | CostumeOrderByWithAggregationInput[]
    by: CostumeScalarFieldEnum[] | CostumeScalarFieldEnum
    having?: CostumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostumeCountAggregateInputType | true
    _avg?: CostumeAvgAggregateInputType
    _sum?: CostumeSumAggregateInputType
    _min?: CostumeMinAggregateInputType
    _max?: CostumeMaxAggregateInputType
  }

  export type CostumeGroupByOutputType = {
    id: string
    nom: string
    epoque: $Enums.Epoque
    description: string | null
    taille: string
    couleur: string
    matiere: string | null
    etat: $Enums.Etat
    quantiteTotal: number
    quantiteDispo: number
    emplacement: string | null
    proprietaire: string
    createdAt: Date
    updatedAt: Date
    _count: CostumeCountAggregateOutputType | null
    _avg: CostumeAvgAggregateOutputType | null
    _sum: CostumeSumAggregateOutputType | null
    _min: CostumeMinAggregateOutputType | null
    _max: CostumeMaxAggregateOutputType | null
  }

  type GetCostumeGroupByPayload<T extends CostumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostumeGroupByOutputType[P]>
            : GetScalarType<T[P], CostumeGroupByOutputType[P]>
        }
      >
    >


  export type CostumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    epoque?: boolean
    description?: boolean
    taille?: boolean
    couleur?: boolean
    matiere?: boolean
    etat?: boolean
    quantiteTotal?: boolean
    quantiteDispo?: boolean
    emplacement?: boolean
    proprietaire?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prets?: boolean | Costume$pretsArgs<ExtArgs>
    images?: boolean | Costume$imagesArgs<ExtArgs>
    _count?: boolean | CostumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costume"]>

  export type CostumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    epoque?: boolean
    description?: boolean
    taille?: boolean
    couleur?: boolean
    matiere?: boolean
    etat?: boolean
    quantiteTotal?: boolean
    quantiteDispo?: boolean
    emplacement?: boolean
    proprietaire?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["costume"]>

  export type CostumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    epoque?: boolean
    description?: boolean
    taille?: boolean
    couleur?: boolean
    matiere?: boolean
    etat?: boolean
    quantiteTotal?: boolean
    quantiteDispo?: boolean
    emplacement?: boolean
    proprietaire?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["costume"]>

  export type CostumeSelectScalar = {
    id?: boolean
    nom?: boolean
    epoque?: boolean
    description?: boolean
    taille?: boolean
    couleur?: boolean
    matiere?: boolean
    etat?: boolean
    quantiteTotal?: boolean
    quantiteDispo?: boolean
    emplacement?: boolean
    proprietaire?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CostumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "epoque" | "description" | "taille" | "couleur" | "matiere" | "etat" | "quantiteTotal" | "quantiteDispo" | "emplacement" | "proprietaire" | "createdAt" | "updatedAt", ExtArgs["result"]["costume"]>
  export type CostumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prets?: boolean | Costume$pretsArgs<ExtArgs>
    images?: boolean | Costume$imagesArgs<ExtArgs>
    _count?: boolean | CostumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CostumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CostumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CostumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Costume"
    objects: {
      prets: Prisma.$PretPayload<ExtArgs>[]
      images: Prisma.$CostumeImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      epoque: $Enums.Epoque
      description: string | null
      taille: string
      couleur: string
      matiere: string | null
      etat: $Enums.Etat
      quantiteTotal: number
      quantiteDispo: number
      emplacement: string | null
      proprietaire: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["costume"]>
    composites: {}
  }

  type CostumeGetPayload<S extends boolean | null | undefined | CostumeDefaultArgs> = $Result.GetResult<Prisma.$CostumePayload, S>

  type CostumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CostumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CostumeCountAggregateInputType | true
    }

  export interface CostumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Costume'], meta: { name: 'Costume' } }
    /**
     * Find zero or one Costume that matches the filter.
     * @param {CostumeFindUniqueArgs} args - Arguments to find a Costume
     * @example
     * // Get one Costume
     * const costume = await prisma.costume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CostumeFindUniqueArgs>(args: SelectSubset<T, CostumeFindUniqueArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Costume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CostumeFindUniqueOrThrowArgs} args - Arguments to find a Costume
     * @example
     * // Get one Costume
     * const costume = await prisma.costume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CostumeFindUniqueOrThrowArgs>(args: SelectSubset<T, CostumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Costume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeFindFirstArgs} args - Arguments to find a Costume
     * @example
     * // Get one Costume
     * const costume = await prisma.costume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CostumeFindFirstArgs>(args?: SelectSubset<T, CostumeFindFirstArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Costume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeFindFirstOrThrowArgs} args - Arguments to find a Costume
     * @example
     * // Get one Costume
     * const costume = await prisma.costume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CostumeFindFirstOrThrowArgs>(args?: SelectSubset<T, CostumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Costumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Costumes
     * const costumes = await prisma.costume.findMany()
     * 
     * // Get first 10 Costumes
     * const costumes = await prisma.costume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const costumeWithIdOnly = await prisma.costume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CostumeFindManyArgs>(args?: SelectSubset<T, CostumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Costume.
     * @param {CostumeCreateArgs} args - Arguments to create a Costume.
     * @example
     * // Create one Costume
     * const Costume = await prisma.costume.create({
     *   data: {
     *     // ... data to create a Costume
     *   }
     * })
     * 
     */
    create<T extends CostumeCreateArgs>(args: SelectSubset<T, CostumeCreateArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Costumes.
     * @param {CostumeCreateManyArgs} args - Arguments to create many Costumes.
     * @example
     * // Create many Costumes
     * const costume = await prisma.costume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CostumeCreateManyArgs>(args?: SelectSubset<T, CostumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Costumes and returns the data saved in the database.
     * @param {CostumeCreateManyAndReturnArgs} args - Arguments to create many Costumes.
     * @example
     * // Create many Costumes
     * const costume = await prisma.costume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Costumes and only return the `id`
     * const costumeWithIdOnly = await prisma.costume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CostumeCreateManyAndReturnArgs>(args?: SelectSubset<T, CostumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Costume.
     * @param {CostumeDeleteArgs} args - Arguments to delete one Costume.
     * @example
     * // Delete one Costume
     * const Costume = await prisma.costume.delete({
     *   where: {
     *     // ... filter to delete one Costume
     *   }
     * })
     * 
     */
    delete<T extends CostumeDeleteArgs>(args: SelectSubset<T, CostumeDeleteArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Costume.
     * @param {CostumeUpdateArgs} args - Arguments to update one Costume.
     * @example
     * // Update one Costume
     * const costume = await prisma.costume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CostumeUpdateArgs>(args: SelectSubset<T, CostumeUpdateArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Costumes.
     * @param {CostumeDeleteManyArgs} args - Arguments to filter Costumes to delete.
     * @example
     * // Delete a few Costumes
     * const { count } = await prisma.costume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CostumeDeleteManyArgs>(args?: SelectSubset<T, CostumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Costumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Costumes
     * const costume = await prisma.costume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CostumeUpdateManyArgs>(args: SelectSubset<T, CostumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Costumes and returns the data updated in the database.
     * @param {CostumeUpdateManyAndReturnArgs} args - Arguments to update many Costumes.
     * @example
     * // Update many Costumes
     * const costume = await prisma.costume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Costumes and only return the `id`
     * const costumeWithIdOnly = await prisma.costume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CostumeUpdateManyAndReturnArgs>(args: SelectSubset<T, CostumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Costume.
     * @param {CostumeUpsertArgs} args - Arguments to update or create a Costume.
     * @example
     * // Update or create a Costume
     * const costume = await prisma.costume.upsert({
     *   create: {
     *     // ... data to create a Costume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Costume we want to update
     *   }
     * })
     */
    upsert<T extends CostumeUpsertArgs>(args: SelectSubset<T, CostumeUpsertArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Costumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeCountArgs} args - Arguments to filter Costumes to count.
     * @example
     * // Count the number of Costumes
     * const count = await prisma.costume.count({
     *   where: {
     *     // ... the filter for the Costumes we want to count
     *   }
     * })
    **/
    count<T extends CostumeCountArgs>(
      args?: Subset<T, CostumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Costume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CostumeAggregateArgs>(args: Subset<T, CostumeAggregateArgs>): Prisma.PrismaPromise<GetCostumeAggregateType<T>>

    /**
     * Group by Costume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CostumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostumeGroupByArgs['orderBy'] }
        : { orderBy?: CostumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CostumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Costume model
   */
  readonly fields: CostumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Costume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CostumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prets<T extends Costume$pretsArgs<ExtArgs> = {}>(args?: Subset<T, Costume$pretsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Costume$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Costume$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Costume model
   */
  interface CostumeFieldRefs {
    readonly id: FieldRef<"Costume", 'String'>
    readonly nom: FieldRef<"Costume", 'String'>
    readonly epoque: FieldRef<"Costume", 'Epoque'>
    readonly description: FieldRef<"Costume", 'String'>
    readonly taille: FieldRef<"Costume", 'String'>
    readonly couleur: FieldRef<"Costume", 'String'>
    readonly matiere: FieldRef<"Costume", 'String'>
    readonly etat: FieldRef<"Costume", 'Etat'>
    readonly quantiteTotal: FieldRef<"Costume", 'Int'>
    readonly quantiteDispo: FieldRef<"Costume", 'Int'>
    readonly emplacement: FieldRef<"Costume", 'String'>
    readonly proprietaire: FieldRef<"Costume", 'String'>
    readonly createdAt: FieldRef<"Costume", 'DateTime'>
    readonly updatedAt: FieldRef<"Costume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Costume findUnique
   */
  export type CostumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * Filter, which Costume to fetch.
     */
    where: CostumeWhereUniqueInput
  }

  /**
   * Costume findUniqueOrThrow
   */
  export type CostumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * Filter, which Costume to fetch.
     */
    where: CostumeWhereUniqueInput
  }

  /**
   * Costume findFirst
   */
  export type CostumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * Filter, which Costume to fetch.
     */
    where?: CostumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumes to fetch.
     */
    orderBy?: CostumeOrderByWithRelationInput | CostumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costumes.
     */
    cursor?: CostumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumes.
     */
    distinct?: CostumeScalarFieldEnum | CostumeScalarFieldEnum[]
  }

  /**
   * Costume findFirstOrThrow
   */
  export type CostumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * Filter, which Costume to fetch.
     */
    where?: CostumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumes to fetch.
     */
    orderBy?: CostumeOrderByWithRelationInput | CostumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costumes.
     */
    cursor?: CostumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumes.
     */
    distinct?: CostumeScalarFieldEnum | CostumeScalarFieldEnum[]
  }

  /**
   * Costume findMany
   */
  export type CostumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * Filter, which Costumes to fetch.
     */
    where?: CostumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumes to fetch.
     */
    orderBy?: CostumeOrderByWithRelationInput | CostumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Costumes.
     */
    cursor?: CostumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumes.
     */
    distinct?: CostumeScalarFieldEnum | CostumeScalarFieldEnum[]
  }

  /**
   * Costume create
   */
  export type CostumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Costume.
     */
    data: XOR<CostumeCreateInput, CostumeUncheckedCreateInput>
  }

  /**
   * Costume createMany
   */
  export type CostumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Costumes.
     */
    data: CostumeCreateManyInput | CostumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Costume createManyAndReturn
   */
  export type CostumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * The data used to create many Costumes.
     */
    data: CostumeCreateManyInput | CostumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Costume update
   */
  export type CostumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Costume.
     */
    data: XOR<CostumeUpdateInput, CostumeUncheckedUpdateInput>
    /**
     * Choose, which Costume to update.
     */
    where: CostumeWhereUniqueInput
  }

  /**
   * Costume updateMany
   */
  export type CostumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Costumes.
     */
    data: XOR<CostumeUpdateManyMutationInput, CostumeUncheckedUpdateManyInput>
    /**
     * Filter which Costumes to update
     */
    where?: CostumeWhereInput
    /**
     * Limit how many Costumes to update.
     */
    limit?: number
  }

  /**
   * Costume updateManyAndReturn
   */
  export type CostumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * The data used to update Costumes.
     */
    data: XOR<CostumeUpdateManyMutationInput, CostumeUncheckedUpdateManyInput>
    /**
     * Filter which Costumes to update
     */
    where?: CostumeWhereInput
    /**
     * Limit how many Costumes to update.
     */
    limit?: number
  }

  /**
   * Costume upsert
   */
  export type CostumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Costume to update in case it exists.
     */
    where: CostumeWhereUniqueInput
    /**
     * In case the Costume found by the `where` argument doesn't exist, create a new Costume with this data.
     */
    create: XOR<CostumeCreateInput, CostumeUncheckedCreateInput>
    /**
     * In case the Costume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostumeUpdateInput, CostumeUncheckedUpdateInput>
  }

  /**
   * Costume delete
   */
  export type CostumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
    /**
     * Filter which Costume to delete.
     */
    where: CostumeWhereUniqueInput
  }

  /**
   * Costume deleteMany
   */
  export type CostumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Costumes to delete
     */
    where?: CostumeWhereInput
    /**
     * Limit how many Costumes to delete.
     */
    limit?: number
  }

  /**
   * Costume.prets
   */
  export type Costume$pretsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    where?: PretWhereInput
    orderBy?: PretOrderByWithRelationInput | PretOrderByWithRelationInput[]
    cursor?: PretWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PretScalarFieldEnum | PretScalarFieldEnum[]
  }

  /**
   * Costume.images
   */
  export type Costume$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    where?: CostumeImageWhereInput
    orderBy?: CostumeImageOrderByWithRelationInput | CostumeImageOrderByWithRelationInput[]
    cursor?: CostumeImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CostumeImageScalarFieldEnum | CostumeImageScalarFieldEnum[]
  }

  /**
   * Costume without action
   */
  export type CostumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Costume
     */
    select?: CostumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Costume
     */
    omit?: CostumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeInclude<ExtArgs> | null
  }


  /**
   * Model CostumeImage
   */

  export type AggregateCostumeImage = {
    _count: CostumeImageCountAggregateOutputType | null
    _avg: CostumeImageAvgAggregateOutputType | null
    _sum: CostumeImageSumAggregateOutputType | null
    _min: CostumeImageMinAggregateOutputType | null
    _max: CostumeImageMaxAggregateOutputType | null
  }

  export type CostumeImageAvgAggregateOutputType = {
    ordre: number | null
  }

  export type CostumeImageSumAggregateOutputType = {
    ordre: number | null
  }

  export type CostumeImageMinAggregateOutputType = {
    id: string | null
    costumeId: string | null
    url: string | null
    ordre: number | null
    createdAt: Date | null
  }

  export type CostumeImageMaxAggregateOutputType = {
    id: string | null
    costumeId: string | null
    url: string | null
    ordre: number | null
    createdAt: Date | null
  }

  export type CostumeImageCountAggregateOutputType = {
    id: number
    costumeId: number
    url: number
    ordre: number
    createdAt: number
    _all: number
  }


  export type CostumeImageAvgAggregateInputType = {
    ordre?: true
  }

  export type CostumeImageSumAggregateInputType = {
    ordre?: true
  }

  export type CostumeImageMinAggregateInputType = {
    id?: true
    costumeId?: true
    url?: true
    ordre?: true
    createdAt?: true
  }

  export type CostumeImageMaxAggregateInputType = {
    id?: true
    costumeId?: true
    url?: true
    ordre?: true
    createdAt?: true
  }

  export type CostumeImageCountAggregateInputType = {
    id?: true
    costumeId?: true
    url?: true
    ordre?: true
    createdAt?: true
    _all?: true
  }

  export type CostumeImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostumeImage to aggregate.
     */
    where?: CostumeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostumeImages to fetch.
     */
    orderBy?: CostumeImageOrderByWithRelationInput | CostumeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CostumeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostumeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostumeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CostumeImages
    **/
    _count?: true | CostumeImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CostumeImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CostumeImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostumeImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostumeImageMaxAggregateInputType
  }

  export type GetCostumeImageAggregateType<T extends CostumeImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCostumeImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostumeImage[P]>
      : GetScalarType<T[P], AggregateCostumeImage[P]>
  }




  export type CostumeImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostumeImageWhereInput
    orderBy?: CostumeImageOrderByWithAggregationInput | CostumeImageOrderByWithAggregationInput[]
    by: CostumeImageScalarFieldEnum[] | CostumeImageScalarFieldEnum
    having?: CostumeImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostumeImageCountAggregateInputType | true
    _avg?: CostumeImageAvgAggregateInputType
    _sum?: CostumeImageSumAggregateInputType
    _min?: CostumeImageMinAggregateInputType
    _max?: CostumeImageMaxAggregateInputType
  }

  export type CostumeImageGroupByOutputType = {
    id: string
    costumeId: string
    url: string
    ordre: number
    createdAt: Date
    _count: CostumeImageCountAggregateOutputType | null
    _avg: CostumeImageAvgAggregateOutputType | null
    _sum: CostumeImageSumAggregateOutputType | null
    _min: CostumeImageMinAggregateOutputType | null
    _max: CostumeImageMaxAggregateOutputType | null
  }

  type GetCostumeImageGroupByPayload<T extends CostumeImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostumeImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostumeImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostumeImageGroupByOutputType[P]>
            : GetScalarType<T[P], CostumeImageGroupByOutputType[P]>
        }
      >
    >


  export type CostumeImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costumeId?: boolean
    url?: boolean
    ordre?: boolean
    createdAt?: boolean
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costumeImage"]>

  export type CostumeImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costumeId?: boolean
    url?: boolean
    ordre?: boolean
    createdAt?: boolean
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costumeImage"]>

  export type CostumeImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costumeId?: boolean
    url?: boolean
    ordre?: boolean
    createdAt?: boolean
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costumeImage"]>

  export type CostumeImageSelectScalar = {
    id?: boolean
    costumeId?: boolean
    url?: boolean
    ordre?: boolean
    createdAt?: boolean
  }

  export type CostumeImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "costumeId" | "url" | "ordre" | "createdAt", ExtArgs["result"]["costumeImage"]>
  export type CostumeImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }
  export type CostumeImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }
  export type CostumeImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }

  export type $CostumeImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CostumeImage"
    objects: {
      costume: Prisma.$CostumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      costumeId: string
      url: string
      ordre: number
      createdAt: Date
    }, ExtArgs["result"]["costumeImage"]>
    composites: {}
  }

  type CostumeImageGetPayload<S extends boolean | null | undefined | CostumeImageDefaultArgs> = $Result.GetResult<Prisma.$CostumeImagePayload, S>

  type CostumeImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CostumeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CostumeImageCountAggregateInputType | true
    }

  export interface CostumeImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CostumeImage'], meta: { name: 'CostumeImage' } }
    /**
     * Find zero or one CostumeImage that matches the filter.
     * @param {CostumeImageFindUniqueArgs} args - Arguments to find a CostumeImage
     * @example
     * // Get one CostumeImage
     * const costumeImage = await prisma.costumeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CostumeImageFindUniqueArgs>(args: SelectSubset<T, CostumeImageFindUniqueArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CostumeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CostumeImageFindUniqueOrThrowArgs} args - Arguments to find a CostumeImage
     * @example
     * // Get one CostumeImage
     * const costumeImage = await prisma.costumeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CostumeImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CostumeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostumeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageFindFirstArgs} args - Arguments to find a CostumeImage
     * @example
     * // Get one CostumeImage
     * const costumeImage = await prisma.costumeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CostumeImageFindFirstArgs>(args?: SelectSubset<T, CostumeImageFindFirstArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostumeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageFindFirstOrThrowArgs} args - Arguments to find a CostumeImage
     * @example
     * // Get one CostumeImage
     * const costumeImage = await prisma.costumeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CostumeImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CostumeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CostumeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CostumeImages
     * const costumeImages = await prisma.costumeImage.findMany()
     * 
     * // Get first 10 CostumeImages
     * const costumeImages = await prisma.costumeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const costumeImageWithIdOnly = await prisma.costumeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CostumeImageFindManyArgs>(args?: SelectSubset<T, CostumeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CostumeImage.
     * @param {CostumeImageCreateArgs} args - Arguments to create a CostumeImage.
     * @example
     * // Create one CostumeImage
     * const CostumeImage = await prisma.costumeImage.create({
     *   data: {
     *     // ... data to create a CostumeImage
     *   }
     * })
     * 
     */
    create<T extends CostumeImageCreateArgs>(args: SelectSubset<T, CostumeImageCreateArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CostumeImages.
     * @param {CostumeImageCreateManyArgs} args - Arguments to create many CostumeImages.
     * @example
     * // Create many CostumeImages
     * const costumeImage = await prisma.costumeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CostumeImageCreateManyArgs>(args?: SelectSubset<T, CostumeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CostumeImages and returns the data saved in the database.
     * @param {CostumeImageCreateManyAndReturnArgs} args - Arguments to create many CostumeImages.
     * @example
     * // Create many CostumeImages
     * const costumeImage = await prisma.costumeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CostumeImages and only return the `id`
     * const costumeImageWithIdOnly = await prisma.costumeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CostumeImageCreateManyAndReturnArgs>(args?: SelectSubset<T, CostumeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CostumeImage.
     * @param {CostumeImageDeleteArgs} args - Arguments to delete one CostumeImage.
     * @example
     * // Delete one CostumeImage
     * const CostumeImage = await prisma.costumeImage.delete({
     *   where: {
     *     // ... filter to delete one CostumeImage
     *   }
     * })
     * 
     */
    delete<T extends CostumeImageDeleteArgs>(args: SelectSubset<T, CostumeImageDeleteArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CostumeImage.
     * @param {CostumeImageUpdateArgs} args - Arguments to update one CostumeImage.
     * @example
     * // Update one CostumeImage
     * const costumeImage = await prisma.costumeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CostumeImageUpdateArgs>(args: SelectSubset<T, CostumeImageUpdateArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CostumeImages.
     * @param {CostumeImageDeleteManyArgs} args - Arguments to filter CostumeImages to delete.
     * @example
     * // Delete a few CostumeImages
     * const { count } = await prisma.costumeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CostumeImageDeleteManyArgs>(args?: SelectSubset<T, CostumeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostumeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CostumeImages
     * const costumeImage = await prisma.costumeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CostumeImageUpdateManyArgs>(args: SelectSubset<T, CostumeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostumeImages and returns the data updated in the database.
     * @param {CostumeImageUpdateManyAndReturnArgs} args - Arguments to update many CostumeImages.
     * @example
     * // Update many CostumeImages
     * const costumeImage = await prisma.costumeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CostumeImages and only return the `id`
     * const costumeImageWithIdOnly = await prisma.costumeImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CostumeImageUpdateManyAndReturnArgs>(args: SelectSubset<T, CostumeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CostumeImage.
     * @param {CostumeImageUpsertArgs} args - Arguments to update or create a CostumeImage.
     * @example
     * // Update or create a CostumeImage
     * const costumeImage = await prisma.costumeImage.upsert({
     *   create: {
     *     // ... data to create a CostumeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CostumeImage we want to update
     *   }
     * })
     */
    upsert<T extends CostumeImageUpsertArgs>(args: SelectSubset<T, CostumeImageUpsertArgs<ExtArgs>>): Prisma__CostumeImageClient<$Result.GetResult<Prisma.$CostumeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CostumeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageCountArgs} args - Arguments to filter CostumeImages to count.
     * @example
     * // Count the number of CostumeImages
     * const count = await prisma.costumeImage.count({
     *   where: {
     *     // ... the filter for the CostumeImages we want to count
     *   }
     * })
    **/
    count<T extends CostumeImageCountArgs>(
      args?: Subset<T, CostumeImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostumeImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CostumeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CostumeImageAggregateArgs>(args: Subset<T, CostumeImageAggregateArgs>): Prisma.PrismaPromise<GetCostumeImageAggregateType<T>>

    /**
     * Group by CostumeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumeImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CostumeImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostumeImageGroupByArgs['orderBy'] }
        : { orderBy?: CostumeImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CostumeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostumeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CostumeImage model
   */
  readonly fields: CostumeImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CostumeImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CostumeImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    costume<T extends CostumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CostumeDefaultArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CostumeImage model
   */
  interface CostumeImageFieldRefs {
    readonly id: FieldRef<"CostumeImage", 'String'>
    readonly costumeId: FieldRef<"CostumeImage", 'String'>
    readonly url: FieldRef<"CostumeImage", 'String'>
    readonly ordre: FieldRef<"CostumeImage", 'Int'>
    readonly createdAt: FieldRef<"CostumeImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CostumeImage findUnique
   */
  export type CostumeImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * Filter, which CostumeImage to fetch.
     */
    where: CostumeImageWhereUniqueInput
  }

  /**
   * CostumeImage findUniqueOrThrow
   */
  export type CostumeImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * Filter, which CostumeImage to fetch.
     */
    where: CostumeImageWhereUniqueInput
  }

  /**
   * CostumeImage findFirst
   */
  export type CostumeImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * Filter, which CostumeImage to fetch.
     */
    where?: CostumeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostumeImages to fetch.
     */
    orderBy?: CostumeImageOrderByWithRelationInput | CostumeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CostumeImages.
     */
    cursor?: CostumeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostumeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostumeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostumeImages.
     */
    distinct?: CostumeImageScalarFieldEnum | CostumeImageScalarFieldEnum[]
  }

  /**
   * CostumeImage findFirstOrThrow
   */
  export type CostumeImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * Filter, which CostumeImage to fetch.
     */
    where?: CostumeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostumeImages to fetch.
     */
    orderBy?: CostumeImageOrderByWithRelationInput | CostumeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CostumeImages.
     */
    cursor?: CostumeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostumeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostumeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostumeImages.
     */
    distinct?: CostumeImageScalarFieldEnum | CostumeImageScalarFieldEnum[]
  }

  /**
   * CostumeImage findMany
   */
  export type CostumeImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * Filter, which CostumeImages to fetch.
     */
    where?: CostumeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CostumeImages to fetch.
     */
    orderBy?: CostumeImageOrderByWithRelationInput | CostumeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CostumeImages.
     */
    cursor?: CostumeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CostumeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CostumeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CostumeImages.
     */
    distinct?: CostumeImageScalarFieldEnum | CostumeImageScalarFieldEnum[]
  }

  /**
   * CostumeImage create
   */
  export type CostumeImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * The data needed to create a CostumeImage.
     */
    data: XOR<CostumeImageCreateInput, CostumeImageUncheckedCreateInput>
  }

  /**
   * CostumeImage createMany
   */
  export type CostumeImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CostumeImages.
     */
    data: CostumeImageCreateManyInput | CostumeImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CostumeImage createManyAndReturn
   */
  export type CostumeImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * The data used to create many CostumeImages.
     */
    data: CostumeImageCreateManyInput | CostumeImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CostumeImage update
   */
  export type CostumeImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * The data needed to update a CostumeImage.
     */
    data: XOR<CostumeImageUpdateInput, CostumeImageUncheckedUpdateInput>
    /**
     * Choose, which CostumeImage to update.
     */
    where: CostumeImageWhereUniqueInput
  }

  /**
   * CostumeImage updateMany
   */
  export type CostumeImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CostumeImages.
     */
    data: XOR<CostumeImageUpdateManyMutationInput, CostumeImageUncheckedUpdateManyInput>
    /**
     * Filter which CostumeImages to update
     */
    where?: CostumeImageWhereInput
    /**
     * Limit how many CostumeImages to update.
     */
    limit?: number
  }

  /**
   * CostumeImage updateManyAndReturn
   */
  export type CostumeImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * The data used to update CostumeImages.
     */
    data: XOR<CostumeImageUpdateManyMutationInput, CostumeImageUncheckedUpdateManyInput>
    /**
     * Filter which CostumeImages to update
     */
    where?: CostumeImageWhereInput
    /**
     * Limit how many CostumeImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CostumeImage upsert
   */
  export type CostumeImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * The filter to search for the CostumeImage to update in case it exists.
     */
    where: CostumeImageWhereUniqueInput
    /**
     * In case the CostumeImage found by the `where` argument doesn't exist, create a new CostumeImage with this data.
     */
    create: XOR<CostumeImageCreateInput, CostumeImageUncheckedCreateInput>
    /**
     * In case the CostumeImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostumeImageUpdateInput, CostumeImageUncheckedUpdateInput>
  }

  /**
   * CostumeImage delete
   */
  export type CostumeImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
    /**
     * Filter which CostumeImage to delete.
     */
    where: CostumeImageWhereUniqueInput
  }

  /**
   * CostumeImage deleteMany
   */
  export type CostumeImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostumeImages to delete
     */
    where?: CostumeImageWhereInput
    /**
     * Limit how many CostumeImages to delete.
     */
    limit?: number
  }

  /**
   * CostumeImage without action
   */
  export type CostumeImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostumeImage
     */
    select?: CostumeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostumeImage
     */
    omit?: CostumeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostumeImageInclude<ExtArgs> | null
  }


  /**
   * Model Pret
   */

  export type AggregatePret = {
    _count: PretCountAggregateOutputType | null
    _min: PretMinAggregateOutputType | null
    _max: PretMaxAggregateOutputType | null
  }

  export type PretMinAggregateOutputType = {
    id: string | null
    costumeId: string | null
    emprunteur: string | null
    dateDebut: Date | null
    dateRetourPrevue: Date | null
    dateRetourReelle: Date | null
    statut: $Enums.StatutPret | null
    notes: string | null
  }

  export type PretMaxAggregateOutputType = {
    id: string | null
    costumeId: string | null
    emprunteur: string | null
    dateDebut: Date | null
    dateRetourPrevue: Date | null
    dateRetourReelle: Date | null
    statut: $Enums.StatutPret | null
    notes: string | null
  }

  export type PretCountAggregateOutputType = {
    id: number
    costumeId: number
    emprunteur: number
    dateDebut: number
    dateRetourPrevue: number
    dateRetourReelle: number
    statut: number
    notes: number
    _all: number
  }


  export type PretMinAggregateInputType = {
    id?: true
    costumeId?: true
    emprunteur?: true
    dateDebut?: true
    dateRetourPrevue?: true
    dateRetourReelle?: true
    statut?: true
    notes?: true
  }

  export type PretMaxAggregateInputType = {
    id?: true
    costumeId?: true
    emprunteur?: true
    dateDebut?: true
    dateRetourPrevue?: true
    dateRetourReelle?: true
    statut?: true
    notes?: true
  }

  export type PretCountAggregateInputType = {
    id?: true
    costumeId?: true
    emprunteur?: true
    dateDebut?: true
    dateRetourPrevue?: true
    dateRetourReelle?: true
    statut?: true
    notes?: true
    _all?: true
  }

  export type PretAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pret to aggregate.
     */
    where?: PretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prets to fetch.
     */
    orderBy?: PretOrderByWithRelationInput | PretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prets
    **/
    _count?: true | PretCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PretMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PretMaxAggregateInputType
  }

  export type GetPretAggregateType<T extends PretAggregateArgs> = {
        [P in keyof T & keyof AggregatePret]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePret[P]>
      : GetScalarType<T[P], AggregatePret[P]>
  }




  export type PretGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PretWhereInput
    orderBy?: PretOrderByWithAggregationInput | PretOrderByWithAggregationInput[]
    by: PretScalarFieldEnum[] | PretScalarFieldEnum
    having?: PretScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PretCountAggregateInputType | true
    _min?: PretMinAggregateInputType
    _max?: PretMaxAggregateInputType
  }

  export type PretGroupByOutputType = {
    id: string
    costumeId: string
    emprunteur: string
    dateDebut: Date
    dateRetourPrevue: Date | null
    dateRetourReelle: Date | null
    statut: $Enums.StatutPret
    notes: string | null
    _count: PretCountAggregateOutputType | null
    _min: PretMinAggregateOutputType | null
    _max: PretMaxAggregateOutputType | null
  }

  type GetPretGroupByPayload<T extends PretGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PretGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PretGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PretGroupByOutputType[P]>
            : GetScalarType<T[P], PretGroupByOutputType[P]>
        }
      >
    >


  export type PretSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costumeId?: boolean
    emprunteur?: boolean
    dateDebut?: boolean
    dateRetourPrevue?: boolean
    dateRetourReelle?: boolean
    statut?: boolean
    notes?: boolean
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pret"]>

  export type PretSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costumeId?: boolean
    emprunteur?: boolean
    dateDebut?: boolean
    dateRetourPrevue?: boolean
    dateRetourReelle?: boolean
    statut?: boolean
    notes?: boolean
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pret"]>

  export type PretSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    costumeId?: boolean
    emprunteur?: boolean
    dateDebut?: boolean
    dateRetourPrevue?: boolean
    dateRetourReelle?: boolean
    statut?: boolean
    notes?: boolean
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pret"]>

  export type PretSelectScalar = {
    id?: boolean
    costumeId?: boolean
    emprunteur?: boolean
    dateDebut?: boolean
    dateRetourPrevue?: boolean
    dateRetourReelle?: boolean
    statut?: boolean
    notes?: boolean
  }

  export type PretOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "costumeId" | "emprunteur" | "dateDebut" | "dateRetourPrevue" | "dateRetourReelle" | "statut" | "notes", ExtArgs["result"]["pret"]>
  export type PretInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }
  export type PretIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }
  export type PretIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costume?: boolean | CostumeDefaultArgs<ExtArgs>
  }

  export type $PretPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pret"
    objects: {
      costume: Prisma.$CostumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      costumeId: string
      emprunteur: string
      dateDebut: Date
      dateRetourPrevue: Date | null
      dateRetourReelle: Date | null
      statut: $Enums.StatutPret
      notes: string | null
    }, ExtArgs["result"]["pret"]>
    composites: {}
  }

  type PretGetPayload<S extends boolean | null | undefined | PretDefaultArgs> = $Result.GetResult<Prisma.$PretPayload, S>

  type PretCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PretFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PretCountAggregateInputType | true
    }

  export interface PretDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pret'], meta: { name: 'Pret' } }
    /**
     * Find zero or one Pret that matches the filter.
     * @param {PretFindUniqueArgs} args - Arguments to find a Pret
     * @example
     * // Get one Pret
     * const pret = await prisma.pret.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PretFindUniqueArgs>(args: SelectSubset<T, PretFindUniqueArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pret that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PretFindUniqueOrThrowArgs} args - Arguments to find a Pret
     * @example
     * // Get one Pret
     * const pret = await prisma.pret.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PretFindUniqueOrThrowArgs>(args: SelectSubset<T, PretFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pret that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretFindFirstArgs} args - Arguments to find a Pret
     * @example
     * // Get one Pret
     * const pret = await prisma.pret.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PretFindFirstArgs>(args?: SelectSubset<T, PretFindFirstArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pret that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretFindFirstOrThrowArgs} args - Arguments to find a Pret
     * @example
     * // Get one Pret
     * const pret = await prisma.pret.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PretFindFirstOrThrowArgs>(args?: SelectSubset<T, PretFindFirstOrThrowArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prets
     * const prets = await prisma.pret.findMany()
     * 
     * // Get first 10 Prets
     * const prets = await prisma.pret.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pretWithIdOnly = await prisma.pret.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PretFindManyArgs>(args?: SelectSubset<T, PretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pret.
     * @param {PretCreateArgs} args - Arguments to create a Pret.
     * @example
     * // Create one Pret
     * const Pret = await prisma.pret.create({
     *   data: {
     *     // ... data to create a Pret
     *   }
     * })
     * 
     */
    create<T extends PretCreateArgs>(args: SelectSubset<T, PretCreateArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prets.
     * @param {PretCreateManyArgs} args - Arguments to create many Prets.
     * @example
     * // Create many Prets
     * const pret = await prisma.pret.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PretCreateManyArgs>(args?: SelectSubset<T, PretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prets and returns the data saved in the database.
     * @param {PretCreateManyAndReturnArgs} args - Arguments to create many Prets.
     * @example
     * // Create many Prets
     * const pret = await prisma.pret.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prets and only return the `id`
     * const pretWithIdOnly = await prisma.pret.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PretCreateManyAndReturnArgs>(args?: SelectSubset<T, PretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pret.
     * @param {PretDeleteArgs} args - Arguments to delete one Pret.
     * @example
     * // Delete one Pret
     * const Pret = await prisma.pret.delete({
     *   where: {
     *     // ... filter to delete one Pret
     *   }
     * })
     * 
     */
    delete<T extends PretDeleteArgs>(args: SelectSubset<T, PretDeleteArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pret.
     * @param {PretUpdateArgs} args - Arguments to update one Pret.
     * @example
     * // Update one Pret
     * const pret = await prisma.pret.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PretUpdateArgs>(args: SelectSubset<T, PretUpdateArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prets.
     * @param {PretDeleteManyArgs} args - Arguments to filter Prets to delete.
     * @example
     * // Delete a few Prets
     * const { count } = await prisma.pret.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PretDeleteManyArgs>(args?: SelectSubset<T, PretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prets
     * const pret = await prisma.pret.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PretUpdateManyArgs>(args: SelectSubset<T, PretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prets and returns the data updated in the database.
     * @param {PretUpdateManyAndReturnArgs} args - Arguments to update many Prets.
     * @example
     * // Update many Prets
     * const pret = await prisma.pret.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prets and only return the `id`
     * const pretWithIdOnly = await prisma.pret.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PretUpdateManyAndReturnArgs>(args: SelectSubset<T, PretUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pret.
     * @param {PretUpsertArgs} args - Arguments to update or create a Pret.
     * @example
     * // Update or create a Pret
     * const pret = await prisma.pret.upsert({
     *   create: {
     *     // ... data to create a Pret
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pret we want to update
     *   }
     * })
     */
    upsert<T extends PretUpsertArgs>(args: SelectSubset<T, PretUpsertArgs<ExtArgs>>): Prisma__PretClient<$Result.GetResult<Prisma.$PretPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretCountArgs} args - Arguments to filter Prets to count.
     * @example
     * // Count the number of Prets
     * const count = await prisma.pret.count({
     *   where: {
     *     // ... the filter for the Prets we want to count
     *   }
     * })
    **/
    count<T extends PretCountArgs>(
      args?: Subset<T, PretCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PretCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PretAggregateArgs>(args: Subset<T, PretAggregateArgs>): Prisma.PrismaPromise<GetPretAggregateType<T>>

    /**
     * Group by Pret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PretGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PretGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PretGroupByArgs['orderBy'] }
        : { orderBy?: PretGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pret model
   */
  readonly fields: PretFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pret.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PretClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    costume<T extends CostumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CostumeDefaultArgs<ExtArgs>>): Prisma__CostumeClient<$Result.GetResult<Prisma.$CostumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pret model
   */
  interface PretFieldRefs {
    readonly id: FieldRef<"Pret", 'String'>
    readonly costumeId: FieldRef<"Pret", 'String'>
    readonly emprunteur: FieldRef<"Pret", 'String'>
    readonly dateDebut: FieldRef<"Pret", 'DateTime'>
    readonly dateRetourPrevue: FieldRef<"Pret", 'DateTime'>
    readonly dateRetourReelle: FieldRef<"Pret", 'DateTime'>
    readonly statut: FieldRef<"Pret", 'StatutPret'>
    readonly notes: FieldRef<"Pret", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pret findUnique
   */
  export type PretFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * Filter, which Pret to fetch.
     */
    where: PretWhereUniqueInput
  }

  /**
   * Pret findUniqueOrThrow
   */
  export type PretFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * Filter, which Pret to fetch.
     */
    where: PretWhereUniqueInput
  }

  /**
   * Pret findFirst
   */
  export type PretFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * Filter, which Pret to fetch.
     */
    where?: PretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prets to fetch.
     */
    orderBy?: PretOrderByWithRelationInput | PretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prets.
     */
    cursor?: PretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prets.
     */
    distinct?: PretScalarFieldEnum | PretScalarFieldEnum[]
  }

  /**
   * Pret findFirstOrThrow
   */
  export type PretFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * Filter, which Pret to fetch.
     */
    where?: PretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prets to fetch.
     */
    orderBy?: PretOrderByWithRelationInput | PretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prets.
     */
    cursor?: PretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prets.
     */
    distinct?: PretScalarFieldEnum | PretScalarFieldEnum[]
  }

  /**
   * Pret findMany
   */
  export type PretFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * Filter, which Prets to fetch.
     */
    where?: PretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prets to fetch.
     */
    orderBy?: PretOrderByWithRelationInput | PretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prets.
     */
    cursor?: PretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prets.
     */
    distinct?: PretScalarFieldEnum | PretScalarFieldEnum[]
  }

  /**
   * Pret create
   */
  export type PretCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * The data needed to create a Pret.
     */
    data: XOR<PretCreateInput, PretUncheckedCreateInput>
  }

  /**
   * Pret createMany
   */
  export type PretCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prets.
     */
    data: PretCreateManyInput | PretCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pret createManyAndReturn
   */
  export type PretCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * The data used to create many Prets.
     */
    data: PretCreateManyInput | PretCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pret update
   */
  export type PretUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * The data needed to update a Pret.
     */
    data: XOR<PretUpdateInput, PretUncheckedUpdateInput>
    /**
     * Choose, which Pret to update.
     */
    where: PretWhereUniqueInput
  }

  /**
   * Pret updateMany
   */
  export type PretUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prets.
     */
    data: XOR<PretUpdateManyMutationInput, PretUncheckedUpdateManyInput>
    /**
     * Filter which Prets to update
     */
    where?: PretWhereInput
    /**
     * Limit how many Prets to update.
     */
    limit?: number
  }

  /**
   * Pret updateManyAndReturn
   */
  export type PretUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * The data used to update Prets.
     */
    data: XOR<PretUpdateManyMutationInput, PretUncheckedUpdateManyInput>
    /**
     * Filter which Prets to update
     */
    where?: PretWhereInput
    /**
     * Limit how many Prets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pret upsert
   */
  export type PretUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * The filter to search for the Pret to update in case it exists.
     */
    where: PretWhereUniqueInput
    /**
     * In case the Pret found by the `where` argument doesn't exist, create a new Pret with this data.
     */
    create: XOR<PretCreateInput, PretUncheckedCreateInput>
    /**
     * In case the Pret was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PretUpdateInput, PretUncheckedUpdateInput>
  }

  /**
   * Pret delete
   */
  export type PretDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
    /**
     * Filter which Pret to delete.
     */
    where: PretWhereUniqueInput
  }

  /**
   * Pret deleteMany
   */
  export type PretDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prets to delete
     */
    where?: PretWhereInput
    /**
     * Limit how many Prets to delete.
     */
    limit?: number
  }

  /**
   * Pret without action
   */
  export type PretDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pret
     */
    select?: PretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pret
     */
    omit?: PretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PretInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    failedAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    failedAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nom: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    failedAttempts: number | null
    lockedUntil: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nom: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    failedAttempts: number | null
    lockedUntil: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nom: number
    role: number
    createdAt: number
    failedAttempts: number
    lockedUntil: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    failedAttempts?: true
  }

  export type UserSumAggregateInputType = {
    failedAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    role?: true
    createdAt?: true
    failedAttempts?: true
    lockedUntil?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    role?: true
    createdAt?: true
    failedAttempts?: true
    lockedUntil?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    role?: true
    createdAt?: true
    failedAttempts?: true
    lockedUntil?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    nom: string
    role: $Enums.Role
    createdAt: Date
    failedAttempts: number
    lockedUntil: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    role?: boolean
    createdAt?: boolean
    failedAttempts?: boolean
    lockedUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    role?: boolean
    createdAt?: boolean
    failedAttempts?: boolean
    lockedUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    role?: boolean
    createdAt?: boolean
    failedAttempts?: boolean
    lockedUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    role?: boolean
    createdAt?: boolean
    failedAttempts?: boolean
    lockedUntil?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nom" | "role" | "createdAt" | "failedAttempts" | "lockedUntil", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nom: string
      role: $Enums.Role
      createdAt: Date
      failedAttempts: number
      lockedUntil: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly failedAttempts: FieldRef<"User", 'Int'>
    readonly lockedUntil: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CostumeScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    epoque: 'epoque',
    description: 'description',
    taille: 'taille',
    couleur: 'couleur',
    matiere: 'matiere',
    etat: 'etat',
    quantiteTotal: 'quantiteTotal',
    quantiteDispo: 'quantiteDispo',
    emplacement: 'emplacement',
    proprietaire: 'proprietaire',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CostumeScalarFieldEnum = (typeof CostumeScalarFieldEnum)[keyof typeof CostumeScalarFieldEnum]


  export const CostumeImageScalarFieldEnum: {
    id: 'id',
    costumeId: 'costumeId',
    url: 'url',
    ordre: 'ordre',
    createdAt: 'createdAt'
  };

  export type CostumeImageScalarFieldEnum = (typeof CostumeImageScalarFieldEnum)[keyof typeof CostumeImageScalarFieldEnum]


  export const PretScalarFieldEnum: {
    id: 'id',
    costumeId: 'costumeId',
    emprunteur: 'emprunteur',
    dateDebut: 'dateDebut',
    dateRetourPrevue: 'dateRetourPrevue',
    dateRetourReelle: 'dateRetourReelle',
    statut: 'statut',
    notes: 'notes'
  };

  export type PretScalarFieldEnum = (typeof PretScalarFieldEnum)[keyof typeof PretScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nom: 'nom',
    role: 'role',
    createdAt: 'createdAt',
    failedAttempts: 'failedAttempts',
    lockedUntil: 'lockedUntil'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Epoque'
   */
  export type EnumEpoqueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Epoque'>
    


  /**
   * Reference to a field of type 'Epoque[]'
   */
  export type ListEnumEpoqueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Epoque[]'>
    


  /**
   * Reference to a field of type 'Etat'
   */
  export type EnumEtatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Etat'>
    


  /**
   * Reference to a field of type 'Etat[]'
   */
  export type ListEnumEtatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Etat[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatutPret'
   */
  export type EnumStatutPretFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPret'>
    


  /**
   * Reference to a field of type 'StatutPret[]'
   */
  export type ListEnumStatutPretFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPret[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CostumeWhereInput = {
    AND?: CostumeWhereInput | CostumeWhereInput[]
    OR?: CostumeWhereInput[]
    NOT?: CostumeWhereInput | CostumeWhereInput[]
    id?: StringFilter<"Costume"> | string
    nom?: StringFilter<"Costume"> | string
    epoque?: EnumEpoqueFilter<"Costume"> | $Enums.Epoque
    description?: StringNullableFilter<"Costume"> | string | null
    taille?: StringFilter<"Costume"> | string
    couleur?: StringFilter<"Costume"> | string
    matiere?: StringNullableFilter<"Costume"> | string | null
    etat?: EnumEtatFilter<"Costume"> | $Enums.Etat
    quantiteTotal?: IntFilter<"Costume"> | number
    quantiteDispo?: IntFilter<"Costume"> | number
    emplacement?: StringNullableFilter<"Costume"> | string | null
    proprietaire?: StringFilter<"Costume"> | string
    createdAt?: DateTimeFilter<"Costume"> | Date | string
    updatedAt?: DateTimeFilter<"Costume"> | Date | string
    prets?: PretListRelationFilter
    images?: CostumeImageListRelationFilter
  }

  export type CostumeOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    epoque?: SortOrder
    description?: SortOrderInput | SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    matiere?: SortOrderInput | SortOrder
    etat?: SortOrder
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
    emplacement?: SortOrderInput | SortOrder
    proprietaire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prets?: PretOrderByRelationAggregateInput
    images?: CostumeImageOrderByRelationAggregateInput
  }

  export type CostumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CostumeWhereInput | CostumeWhereInput[]
    OR?: CostumeWhereInput[]
    NOT?: CostumeWhereInput | CostumeWhereInput[]
    nom?: StringFilter<"Costume"> | string
    epoque?: EnumEpoqueFilter<"Costume"> | $Enums.Epoque
    description?: StringNullableFilter<"Costume"> | string | null
    taille?: StringFilter<"Costume"> | string
    couleur?: StringFilter<"Costume"> | string
    matiere?: StringNullableFilter<"Costume"> | string | null
    etat?: EnumEtatFilter<"Costume"> | $Enums.Etat
    quantiteTotal?: IntFilter<"Costume"> | number
    quantiteDispo?: IntFilter<"Costume"> | number
    emplacement?: StringNullableFilter<"Costume"> | string | null
    proprietaire?: StringFilter<"Costume"> | string
    createdAt?: DateTimeFilter<"Costume"> | Date | string
    updatedAt?: DateTimeFilter<"Costume"> | Date | string
    prets?: PretListRelationFilter
    images?: CostumeImageListRelationFilter
  }, "id">

  export type CostumeOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    epoque?: SortOrder
    description?: SortOrderInput | SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    matiere?: SortOrderInput | SortOrder
    etat?: SortOrder
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
    emplacement?: SortOrderInput | SortOrder
    proprietaire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CostumeCountOrderByAggregateInput
    _avg?: CostumeAvgOrderByAggregateInput
    _max?: CostumeMaxOrderByAggregateInput
    _min?: CostumeMinOrderByAggregateInput
    _sum?: CostumeSumOrderByAggregateInput
  }

  export type CostumeScalarWhereWithAggregatesInput = {
    AND?: CostumeScalarWhereWithAggregatesInput | CostumeScalarWhereWithAggregatesInput[]
    OR?: CostumeScalarWhereWithAggregatesInput[]
    NOT?: CostumeScalarWhereWithAggregatesInput | CostumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Costume"> | string
    nom?: StringWithAggregatesFilter<"Costume"> | string
    epoque?: EnumEpoqueWithAggregatesFilter<"Costume"> | $Enums.Epoque
    description?: StringNullableWithAggregatesFilter<"Costume"> | string | null
    taille?: StringWithAggregatesFilter<"Costume"> | string
    couleur?: StringWithAggregatesFilter<"Costume"> | string
    matiere?: StringNullableWithAggregatesFilter<"Costume"> | string | null
    etat?: EnumEtatWithAggregatesFilter<"Costume"> | $Enums.Etat
    quantiteTotal?: IntWithAggregatesFilter<"Costume"> | number
    quantiteDispo?: IntWithAggregatesFilter<"Costume"> | number
    emplacement?: StringNullableWithAggregatesFilter<"Costume"> | string | null
    proprietaire?: StringWithAggregatesFilter<"Costume"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Costume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Costume"> | Date | string
  }

  export type CostumeImageWhereInput = {
    AND?: CostumeImageWhereInput | CostumeImageWhereInput[]
    OR?: CostumeImageWhereInput[]
    NOT?: CostumeImageWhereInput | CostumeImageWhereInput[]
    id?: StringFilter<"CostumeImage"> | string
    costumeId?: StringFilter<"CostumeImage"> | string
    url?: StringFilter<"CostumeImage"> | string
    ordre?: IntFilter<"CostumeImage"> | number
    createdAt?: DateTimeFilter<"CostumeImage"> | Date | string
    costume?: XOR<CostumeScalarRelationFilter, CostumeWhereInput>
  }

  export type CostumeImageOrderByWithRelationInput = {
    id?: SortOrder
    costumeId?: SortOrder
    url?: SortOrder
    ordre?: SortOrder
    createdAt?: SortOrder
    costume?: CostumeOrderByWithRelationInput
  }

  export type CostumeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CostumeImageWhereInput | CostumeImageWhereInput[]
    OR?: CostumeImageWhereInput[]
    NOT?: CostumeImageWhereInput | CostumeImageWhereInput[]
    costumeId?: StringFilter<"CostumeImage"> | string
    url?: StringFilter<"CostumeImage"> | string
    ordre?: IntFilter<"CostumeImage"> | number
    createdAt?: DateTimeFilter<"CostumeImage"> | Date | string
    costume?: XOR<CostumeScalarRelationFilter, CostumeWhereInput>
  }, "id">

  export type CostumeImageOrderByWithAggregationInput = {
    id?: SortOrder
    costumeId?: SortOrder
    url?: SortOrder
    ordre?: SortOrder
    createdAt?: SortOrder
    _count?: CostumeImageCountOrderByAggregateInput
    _avg?: CostumeImageAvgOrderByAggregateInput
    _max?: CostumeImageMaxOrderByAggregateInput
    _min?: CostumeImageMinOrderByAggregateInput
    _sum?: CostumeImageSumOrderByAggregateInput
  }

  export type CostumeImageScalarWhereWithAggregatesInput = {
    AND?: CostumeImageScalarWhereWithAggregatesInput | CostumeImageScalarWhereWithAggregatesInput[]
    OR?: CostumeImageScalarWhereWithAggregatesInput[]
    NOT?: CostumeImageScalarWhereWithAggregatesInput | CostumeImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CostumeImage"> | string
    costumeId?: StringWithAggregatesFilter<"CostumeImage"> | string
    url?: StringWithAggregatesFilter<"CostumeImage"> | string
    ordre?: IntWithAggregatesFilter<"CostumeImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CostumeImage"> | Date | string
  }

  export type PretWhereInput = {
    AND?: PretWhereInput | PretWhereInput[]
    OR?: PretWhereInput[]
    NOT?: PretWhereInput | PretWhereInput[]
    id?: StringFilter<"Pret"> | string
    costumeId?: StringFilter<"Pret"> | string
    emprunteur?: StringFilter<"Pret"> | string
    dateDebut?: DateTimeFilter<"Pret"> | Date | string
    dateRetourPrevue?: DateTimeNullableFilter<"Pret"> | Date | string | null
    dateRetourReelle?: DateTimeNullableFilter<"Pret"> | Date | string | null
    statut?: EnumStatutPretFilter<"Pret"> | $Enums.StatutPret
    notes?: StringNullableFilter<"Pret"> | string | null
    costume?: XOR<CostumeScalarRelationFilter, CostumeWhereInput>
  }

  export type PretOrderByWithRelationInput = {
    id?: SortOrder
    costumeId?: SortOrder
    emprunteur?: SortOrder
    dateDebut?: SortOrder
    dateRetourPrevue?: SortOrderInput | SortOrder
    dateRetourReelle?: SortOrderInput | SortOrder
    statut?: SortOrder
    notes?: SortOrderInput | SortOrder
    costume?: CostumeOrderByWithRelationInput
  }

  export type PretWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PretWhereInput | PretWhereInput[]
    OR?: PretWhereInput[]
    NOT?: PretWhereInput | PretWhereInput[]
    costumeId?: StringFilter<"Pret"> | string
    emprunteur?: StringFilter<"Pret"> | string
    dateDebut?: DateTimeFilter<"Pret"> | Date | string
    dateRetourPrevue?: DateTimeNullableFilter<"Pret"> | Date | string | null
    dateRetourReelle?: DateTimeNullableFilter<"Pret"> | Date | string | null
    statut?: EnumStatutPretFilter<"Pret"> | $Enums.StatutPret
    notes?: StringNullableFilter<"Pret"> | string | null
    costume?: XOR<CostumeScalarRelationFilter, CostumeWhereInput>
  }, "id">

  export type PretOrderByWithAggregationInput = {
    id?: SortOrder
    costumeId?: SortOrder
    emprunteur?: SortOrder
    dateDebut?: SortOrder
    dateRetourPrevue?: SortOrderInput | SortOrder
    dateRetourReelle?: SortOrderInput | SortOrder
    statut?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PretCountOrderByAggregateInput
    _max?: PretMaxOrderByAggregateInput
    _min?: PretMinOrderByAggregateInput
  }

  export type PretScalarWhereWithAggregatesInput = {
    AND?: PretScalarWhereWithAggregatesInput | PretScalarWhereWithAggregatesInput[]
    OR?: PretScalarWhereWithAggregatesInput[]
    NOT?: PretScalarWhereWithAggregatesInput | PretScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pret"> | string
    costumeId?: StringWithAggregatesFilter<"Pret"> | string
    emprunteur?: StringWithAggregatesFilter<"Pret"> | string
    dateDebut?: DateTimeWithAggregatesFilter<"Pret"> | Date | string
    dateRetourPrevue?: DateTimeNullableWithAggregatesFilter<"Pret"> | Date | string | null
    dateRetourReelle?: DateTimeNullableWithAggregatesFilter<"Pret"> | Date | string | null
    statut?: EnumStatutPretWithAggregatesFilter<"Pret"> | $Enums.StatutPret
    notes?: StringNullableWithAggregatesFilter<"Pret"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    failedAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    failedAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    failedAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    failedAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    failedAttempts?: IntWithAggregatesFilter<"User"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type CostumeCreateInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prets?: PretCreateNestedManyWithoutCostumeInput
    images?: CostumeImageCreateNestedManyWithoutCostumeInput
  }

  export type CostumeUncheckedCreateInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prets?: PretUncheckedCreateNestedManyWithoutCostumeInput
    images?: CostumeImageUncheckedCreateNestedManyWithoutCostumeInput
  }

  export type CostumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prets?: PretUpdateManyWithoutCostumeNestedInput
    images?: CostumeImageUpdateManyWithoutCostumeNestedInput
  }

  export type CostumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prets?: PretUncheckedUpdateManyWithoutCostumeNestedInput
    images?: CostumeImageUncheckedUpdateManyWithoutCostumeNestedInput
  }

  export type CostumeCreateManyInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CostumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumeImageCreateInput = {
    id?: string
    url: string
    ordre?: number
    createdAt?: Date | string
    costume: CostumeCreateNestedOneWithoutImagesInput
  }

  export type CostumeImageUncheckedCreateInput = {
    id?: string
    costumeId: string
    url: string
    ordre?: number
    createdAt?: Date | string
  }

  export type CostumeImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    costume?: CostumeUpdateOneRequiredWithoutImagesNestedInput
  }

  export type CostumeImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumeId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumeImageCreateManyInput = {
    id?: string
    costumeId: string
    url: string
    ordre?: number
    createdAt?: Date | string
  }

  export type CostumeImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumeImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumeId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PretCreateInput = {
    id?: string
    emprunteur: string
    dateDebut?: Date | string
    dateRetourPrevue?: Date | string | null
    dateRetourReelle?: Date | string | null
    statut?: $Enums.StatutPret
    notes?: string | null
    costume: CostumeCreateNestedOneWithoutPretsInput
  }

  export type PretUncheckedCreateInput = {
    id?: string
    costumeId: string
    emprunteur: string
    dateDebut?: Date | string
    dateRetourPrevue?: Date | string | null
    dateRetourReelle?: Date | string | null
    statut?: $Enums.StatutPret
    notes?: string | null
  }

  export type PretUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    costume?: CostumeUpdateOneRequiredWithoutPretsNestedInput
  }

  export type PretUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumeId?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PretCreateManyInput = {
    id?: string
    costumeId: string
    emprunteur: string
    dateDebut?: Date | string
    dateRetourPrevue?: Date | string | null
    dateRetourReelle?: Date | string | null
    statut?: $Enums.StatutPret
    notes?: string | null
  }

  export type PretUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PretUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    costumeId?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    nom: string
    role: $Enums.Role
    createdAt?: Date | string
    failedAttempts?: number
    lockedUntil?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nom: string
    role: $Enums.Role
    createdAt?: Date | string
    failedAttempts?: number
    lockedUntil?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    nom: string
    role: $Enums.Role
    createdAt?: Date | string
    failedAttempts?: number
    lockedUntil?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumEpoqueFilter<$PrismaModel = never> = {
    equals?: $Enums.Epoque | EnumEpoqueFieldRefInput<$PrismaModel>
    in?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    not?: NestedEnumEpoqueFilter<$PrismaModel> | $Enums.Epoque
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEtatFilter<$PrismaModel = never> = {
    equals?: $Enums.Etat | EnumEtatFieldRefInput<$PrismaModel>
    in?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatFilter<$PrismaModel> | $Enums.Etat
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PretListRelationFilter = {
    every?: PretWhereInput
    some?: PretWhereInput
    none?: PretWhereInput
  }

  export type CostumeImageListRelationFilter = {
    every?: CostumeImageWhereInput
    some?: CostumeImageWhereInput
    none?: CostumeImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PretOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CostumeImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CostumeCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    epoque?: SortOrder
    description?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    matiere?: SortOrder
    etat?: SortOrder
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
    emplacement?: SortOrder
    proprietaire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostumeAvgOrderByAggregateInput = {
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
  }

  export type CostumeMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    epoque?: SortOrder
    description?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    matiere?: SortOrder
    etat?: SortOrder
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
    emplacement?: SortOrder
    proprietaire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostumeMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    epoque?: SortOrder
    description?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    matiere?: SortOrder
    etat?: SortOrder
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
    emplacement?: SortOrder
    proprietaire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostumeSumOrderByAggregateInput = {
    quantiteTotal?: SortOrder
    quantiteDispo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumEpoqueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Epoque | EnumEpoqueFieldRefInput<$PrismaModel>
    in?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    not?: NestedEnumEpoqueWithAggregatesFilter<$PrismaModel> | $Enums.Epoque
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEpoqueFilter<$PrismaModel>
    _max?: NestedEnumEpoqueFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEtatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Etat | EnumEtatFieldRefInput<$PrismaModel>
    in?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatWithAggregatesFilter<$PrismaModel> | $Enums.Etat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtatFilter<$PrismaModel>
    _max?: NestedEnumEtatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CostumeScalarRelationFilter = {
    is?: CostumeWhereInput
    isNot?: CostumeWhereInput
  }

  export type CostumeImageCountOrderByAggregateInput = {
    id?: SortOrder
    costumeId?: SortOrder
    url?: SortOrder
    ordre?: SortOrder
    createdAt?: SortOrder
  }

  export type CostumeImageAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type CostumeImageMaxOrderByAggregateInput = {
    id?: SortOrder
    costumeId?: SortOrder
    url?: SortOrder
    ordre?: SortOrder
    createdAt?: SortOrder
  }

  export type CostumeImageMinOrderByAggregateInput = {
    id?: SortOrder
    costumeId?: SortOrder
    url?: SortOrder
    ordre?: SortOrder
    createdAt?: SortOrder
  }

  export type CostumeImageSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatutPretFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPret | EnumStatutPretFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPretFilter<$PrismaModel> | $Enums.StatutPret
  }

  export type PretCountOrderByAggregateInput = {
    id?: SortOrder
    costumeId?: SortOrder
    emprunteur?: SortOrder
    dateDebut?: SortOrder
    dateRetourPrevue?: SortOrder
    dateRetourReelle?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
  }

  export type PretMaxOrderByAggregateInput = {
    id?: SortOrder
    costumeId?: SortOrder
    emprunteur?: SortOrder
    dateDebut?: SortOrder
    dateRetourPrevue?: SortOrder
    dateRetourReelle?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
  }

  export type PretMinOrderByAggregateInput = {
    id?: SortOrder
    costumeId?: SortOrder
    emprunteur?: SortOrder
    dateDebut?: SortOrder
    dateRetourPrevue?: SortOrder
    dateRetourReelle?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatutPretWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPret | EnumStatutPretFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPretWithAggregatesFilter<$PrismaModel> | $Enums.StatutPret
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPretFilter<$PrismaModel>
    _max?: NestedEnumStatutPretFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    failedAttempts?: SortOrder
    lockedUntil?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    failedAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    failedAttempts?: SortOrder
    lockedUntil?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    failedAttempts?: SortOrder
    lockedUntil?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    failedAttempts?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PretCreateNestedManyWithoutCostumeInput = {
    create?: XOR<PretCreateWithoutCostumeInput, PretUncheckedCreateWithoutCostumeInput> | PretCreateWithoutCostumeInput[] | PretUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: PretCreateOrConnectWithoutCostumeInput | PretCreateOrConnectWithoutCostumeInput[]
    createMany?: PretCreateManyCostumeInputEnvelope
    connect?: PretWhereUniqueInput | PretWhereUniqueInput[]
  }

  export type CostumeImageCreateNestedManyWithoutCostumeInput = {
    create?: XOR<CostumeImageCreateWithoutCostumeInput, CostumeImageUncheckedCreateWithoutCostumeInput> | CostumeImageCreateWithoutCostumeInput[] | CostumeImageUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: CostumeImageCreateOrConnectWithoutCostumeInput | CostumeImageCreateOrConnectWithoutCostumeInput[]
    createMany?: CostumeImageCreateManyCostumeInputEnvelope
    connect?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
  }

  export type PretUncheckedCreateNestedManyWithoutCostumeInput = {
    create?: XOR<PretCreateWithoutCostumeInput, PretUncheckedCreateWithoutCostumeInput> | PretCreateWithoutCostumeInput[] | PretUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: PretCreateOrConnectWithoutCostumeInput | PretCreateOrConnectWithoutCostumeInput[]
    createMany?: PretCreateManyCostumeInputEnvelope
    connect?: PretWhereUniqueInput | PretWhereUniqueInput[]
  }

  export type CostumeImageUncheckedCreateNestedManyWithoutCostumeInput = {
    create?: XOR<CostumeImageCreateWithoutCostumeInput, CostumeImageUncheckedCreateWithoutCostumeInput> | CostumeImageCreateWithoutCostumeInput[] | CostumeImageUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: CostumeImageCreateOrConnectWithoutCostumeInput | CostumeImageCreateOrConnectWithoutCostumeInput[]
    createMany?: CostumeImageCreateManyCostumeInputEnvelope
    connect?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEpoqueFieldUpdateOperationsInput = {
    set?: $Enums.Epoque
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEtatFieldUpdateOperationsInput = {
    set?: $Enums.Etat
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PretUpdateManyWithoutCostumeNestedInput = {
    create?: XOR<PretCreateWithoutCostumeInput, PretUncheckedCreateWithoutCostumeInput> | PretCreateWithoutCostumeInput[] | PretUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: PretCreateOrConnectWithoutCostumeInput | PretCreateOrConnectWithoutCostumeInput[]
    upsert?: PretUpsertWithWhereUniqueWithoutCostumeInput | PretUpsertWithWhereUniqueWithoutCostumeInput[]
    createMany?: PretCreateManyCostumeInputEnvelope
    set?: PretWhereUniqueInput | PretWhereUniqueInput[]
    disconnect?: PretWhereUniqueInput | PretWhereUniqueInput[]
    delete?: PretWhereUniqueInput | PretWhereUniqueInput[]
    connect?: PretWhereUniqueInput | PretWhereUniqueInput[]
    update?: PretUpdateWithWhereUniqueWithoutCostumeInput | PretUpdateWithWhereUniqueWithoutCostumeInput[]
    updateMany?: PretUpdateManyWithWhereWithoutCostumeInput | PretUpdateManyWithWhereWithoutCostumeInput[]
    deleteMany?: PretScalarWhereInput | PretScalarWhereInput[]
  }

  export type CostumeImageUpdateManyWithoutCostumeNestedInput = {
    create?: XOR<CostumeImageCreateWithoutCostumeInput, CostumeImageUncheckedCreateWithoutCostumeInput> | CostumeImageCreateWithoutCostumeInput[] | CostumeImageUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: CostumeImageCreateOrConnectWithoutCostumeInput | CostumeImageCreateOrConnectWithoutCostumeInput[]
    upsert?: CostumeImageUpsertWithWhereUniqueWithoutCostumeInput | CostumeImageUpsertWithWhereUniqueWithoutCostumeInput[]
    createMany?: CostumeImageCreateManyCostumeInputEnvelope
    set?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    disconnect?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    delete?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    connect?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    update?: CostumeImageUpdateWithWhereUniqueWithoutCostumeInput | CostumeImageUpdateWithWhereUniqueWithoutCostumeInput[]
    updateMany?: CostumeImageUpdateManyWithWhereWithoutCostumeInput | CostumeImageUpdateManyWithWhereWithoutCostumeInput[]
    deleteMany?: CostumeImageScalarWhereInput | CostumeImageScalarWhereInput[]
  }

  export type PretUncheckedUpdateManyWithoutCostumeNestedInput = {
    create?: XOR<PretCreateWithoutCostumeInput, PretUncheckedCreateWithoutCostumeInput> | PretCreateWithoutCostumeInput[] | PretUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: PretCreateOrConnectWithoutCostumeInput | PretCreateOrConnectWithoutCostumeInput[]
    upsert?: PretUpsertWithWhereUniqueWithoutCostumeInput | PretUpsertWithWhereUniqueWithoutCostumeInput[]
    createMany?: PretCreateManyCostumeInputEnvelope
    set?: PretWhereUniqueInput | PretWhereUniqueInput[]
    disconnect?: PretWhereUniqueInput | PretWhereUniqueInput[]
    delete?: PretWhereUniqueInput | PretWhereUniqueInput[]
    connect?: PretWhereUniqueInput | PretWhereUniqueInput[]
    update?: PretUpdateWithWhereUniqueWithoutCostumeInput | PretUpdateWithWhereUniqueWithoutCostumeInput[]
    updateMany?: PretUpdateManyWithWhereWithoutCostumeInput | PretUpdateManyWithWhereWithoutCostumeInput[]
    deleteMany?: PretScalarWhereInput | PretScalarWhereInput[]
  }

  export type CostumeImageUncheckedUpdateManyWithoutCostumeNestedInput = {
    create?: XOR<CostumeImageCreateWithoutCostumeInput, CostumeImageUncheckedCreateWithoutCostumeInput> | CostumeImageCreateWithoutCostumeInput[] | CostumeImageUncheckedCreateWithoutCostumeInput[]
    connectOrCreate?: CostumeImageCreateOrConnectWithoutCostumeInput | CostumeImageCreateOrConnectWithoutCostumeInput[]
    upsert?: CostumeImageUpsertWithWhereUniqueWithoutCostumeInput | CostumeImageUpsertWithWhereUniqueWithoutCostumeInput[]
    createMany?: CostumeImageCreateManyCostumeInputEnvelope
    set?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    disconnect?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    delete?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    connect?: CostumeImageWhereUniqueInput | CostumeImageWhereUniqueInput[]
    update?: CostumeImageUpdateWithWhereUniqueWithoutCostumeInput | CostumeImageUpdateWithWhereUniqueWithoutCostumeInput[]
    updateMany?: CostumeImageUpdateManyWithWhereWithoutCostumeInput | CostumeImageUpdateManyWithWhereWithoutCostumeInput[]
    deleteMany?: CostumeImageScalarWhereInput | CostumeImageScalarWhereInput[]
  }

  export type CostumeCreateNestedOneWithoutImagesInput = {
    create?: XOR<CostumeCreateWithoutImagesInput, CostumeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CostumeCreateOrConnectWithoutImagesInput
    connect?: CostumeWhereUniqueInput
  }

  export type CostumeUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CostumeCreateWithoutImagesInput, CostumeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CostumeCreateOrConnectWithoutImagesInput
    upsert?: CostumeUpsertWithoutImagesInput
    connect?: CostumeWhereUniqueInput
    update?: XOR<XOR<CostumeUpdateToOneWithWhereWithoutImagesInput, CostumeUpdateWithoutImagesInput>, CostumeUncheckedUpdateWithoutImagesInput>
  }

  export type CostumeCreateNestedOneWithoutPretsInput = {
    create?: XOR<CostumeCreateWithoutPretsInput, CostumeUncheckedCreateWithoutPretsInput>
    connectOrCreate?: CostumeCreateOrConnectWithoutPretsInput
    connect?: CostumeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatutPretFieldUpdateOperationsInput = {
    set?: $Enums.StatutPret
  }

  export type CostumeUpdateOneRequiredWithoutPretsNestedInput = {
    create?: XOR<CostumeCreateWithoutPretsInput, CostumeUncheckedCreateWithoutPretsInput>
    connectOrCreate?: CostumeCreateOrConnectWithoutPretsInput
    upsert?: CostumeUpsertWithoutPretsInput
    connect?: CostumeWhereUniqueInput
    update?: XOR<XOR<CostumeUpdateToOneWithWhereWithoutPretsInput, CostumeUpdateWithoutPretsInput>, CostumeUncheckedUpdateWithoutPretsInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumEpoqueFilter<$PrismaModel = never> = {
    equals?: $Enums.Epoque | EnumEpoqueFieldRefInput<$PrismaModel>
    in?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    not?: NestedEnumEpoqueFilter<$PrismaModel> | $Enums.Epoque
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEtatFilter<$PrismaModel = never> = {
    equals?: $Enums.Etat | EnumEtatFieldRefInput<$PrismaModel>
    in?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatFilter<$PrismaModel> | $Enums.Etat
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEpoqueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Epoque | EnumEpoqueFieldRefInput<$PrismaModel>
    in?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.Epoque[] | ListEnumEpoqueFieldRefInput<$PrismaModel>
    not?: NestedEnumEpoqueWithAggregatesFilter<$PrismaModel> | $Enums.Epoque
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEpoqueFilter<$PrismaModel>
    _max?: NestedEnumEpoqueFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEtatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Etat | EnumEtatFieldRefInput<$PrismaModel>
    in?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    notIn?: $Enums.Etat[] | ListEnumEtatFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatWithAggregatesFilter<$PrismaModel> | $Enums.Etat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtatFilter<$PrismaModel>
    _max?: NestedEnumEtatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatutPretFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPret | EnumStatutPretFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPretFilter<$PrismaModel> | $Enums.StatutPret
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutPretWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPret | EnumStatutPretFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPret[] | ListEnumStatutPretFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPretWithAggregatesFilter<$PrismaModel> | $Enums.StatutPret
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPretFilter<$PrismaModel>
    _max?: NestedEnumStatutPretFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PretCreateWithoutCostumeInput = {
    id?: string
    emprunteur: string
    dateDebut?: Date | string
    dateRetourPrevue?: Date | string | null
    dateRetourReelle?: Date | string | null
    statut?: $Enums.StatutPret
    notes?: string | null
  }

  export type PretUncheckedCreateWithoutCostumeInput = {
    id?: string
    emprunteur: string
    dateDebut?: Date | string
    dateRetourPrevue?: Date | string | null
    dateRetourReelle?: Date | string | null
    statut?: $Enums.StatutPret
    notes?: string | null
  }

  export type PretCreateOrConnectWithoutCostumeInput = {
    where: PretWhereUniqueInput
    create: XOR<PretCreateWithoutCostumeInput, PretUncheckedCreateWithoutCostumeInput>
  }

  export type PretCreateManyCostumeInputEnvelope = {
    data: PretCreateManyCostumeInput | PretCreateManyCostumeInput[]
    skipDuplicates?: boolean
  }

  export type CostumeImageCreateWithoutCostumeInput = {
    id?: string
    url: string
    ordre?: number
    createdAt?: Date | string
  }

  export type CostumeImageUncheckedCreateWithoutCostumeInput = {
    id?: string
    url: string
    ordre?: number
    createdAt?: Date | string
  }

  export type CostumeImageCreateOrConnectWithoutCostumeInput = {
    where: CostumeImageWhereUniqueInput
    create: XOR<CostumeImageCreateWithoutCostumeInput, CostumeImageUncheckedCreateWithoutCostumeInput>
  }

  export type CostumeImageCreateManyCostumeInputEnvelope = {
    data: CostumeImageCreateManyCostumeInput | CostumeImageCreateManyCostumeInput[]
    skipDuplicates?: boolean
  }

  export type PretUpsertWithWhereUniqueWithoutCostumeInput = {
    where: PretWhereUniqueInput
    update: XOR<PretUpdateWithoutCostumeInput, PretUncheckedUpdateWithoutCostumeInput>
    create: XOR<PretCreateWithoutCostumeInput, PretUncheckedCreateWithoutCostumeInput>
  }

  export type PretUpdateWithWhereUniqueWithoutCostumeInput = {
    where: PretWhereUniqueInput
    data: XOR<PretUpdateWithoutCostumeInput, PretUncheckedUpdateWithoutCostumeInput>
  }

  export type PretUpdateManyWithWhereWithoutCostumeInput = {
    where: PretScalarWhereInput
    data: XOR<PretUpdateManyMutationInput, PretUncheckedUpdateManyWithoutCostumeInput>
  }

  export type PretScalarWhereInput = {
    AND?: PretScalarWhereInput | PretScalarWhereInput[]
    OR?: PretScalarWhereInput[]
    NOT?: PretScalarWhereInput | PretScalarWhereInput[]
    id?: StringFilter<"Pret"> | string
    costumeId?: StringFilter<"Pret"> | string
    emprunteur?: StringFilter<"Pret"> | string
    dateDebut?: DateTimeFilter<"Pret"> | Date | string
    dateRetourPrevue?: DateTimeNullableFilter<"Pret"> | Date | string | null
    dateRetourReelle?: DateTimeNullableFilter<"Pret"> | Date | string | null
    statut?: EnumStatutPretFilter<"Pret"> | $Enums.StatutPret
    notes?: StringNullableFilter<"Pret"> | string | null
  }

  export type CostumeImageUpsertWithWhereUniqueWithoutCostumeInput = {
    where: CostumeImageWhereUniqueInput
    update: XOR<CostumeImageUpdateWithoutCostumeInput, CostumeImageUncheckedUpdateWithoutCostumeInput>
    create: XOR<CostumeImageCreateWithoutCostumeInput, CostumeImageUncheckedCreateWithoutCostumeInput>
  }

  export type CostumeImageUpdateWithWhereUniqueWithoutCostumeInput = {
    where: CostumeImageWhereUniqueInput
    data: XOR<CostumeImageUpdateWithoutCostumeInput, CostumeImageUncheckedUpdateWithoutCostumeInput>
  }

  export type CostumeImageUpdateManyWithWhereWithoutCostumeInput = {
    where: CostumeImageScalarWhereInput
    data: XOR<CostumeImageUpdateManyMutationInput, CostumeImageUncheckedUpdateManyWithoutCostumeInput>
  }

  export type CostumeImageScalarWhereInput = {
    AND?: CostumeImageScalarWhereInput | CostumeImageScalarWhereInput[]
    OR?: CostumeImageScalarWhereInput[]
    NOT?: CostumeImageScalarWhereInput | CostumeImageScalarWhereInput[]
    id?: StringFilter<"CostumeImage"> | string
    costumeId?: StringFilter<"CostumeImage"> | string
    url?: StringFilter<"CostumeImage"> | string
    ordre?: IntFilter<"CostumeImage"> | number
    createdAt?: DateTimeFilter<"CostumeImage"> | Date | string
  }

  export type CostumeCreateWithoutImagesInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prets?: PretCreateNestedManyWithoutCostumeInput
  }

  export type CostumeUncheckedCreateWithoutImagesInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prets?: PretUncheckedCreateNestedManyWithoutCostumeInput
  }

  export type CostumeCreateOrConnectWithoutImagesInput = {
    where: CostumeWhereUniqueInput
    create: XOR<CostumeCreateWithoutImagesInput, CostumeUncheckedCreateWithoutImagesInput>
  }

  export type CostumeUpsertWithoutImagesInput = {
    update: XOR<CostumeUpdateWithoutImagesInput, CostumeUncheckedUpdateWithoutImagesInput>
    create: XOR<CostumeCreateWithoutImagesInput, CostumeUncheckedCreateWithoutImagesInput>
    where?: CostumeWhereInput
  }

  export type CostumeUpdateToOneWithWhereWithoutImagesInput = {
    where?: CostumeWhereInput
    data: XOR<CostumeUpdateWithoutImagesInput, CostumeUncheckedUpdateWithoutImagesInput>
  }

  export type CostumeUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prets?: PretUpdateManyWithoutCostumeNestedInput
  }

  export type CostumeUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prets?: PretUncheckedUpdateManyWithoutCostumeNestedInput
  }

  export type CostumeCreateWithoutPretsInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: CostumeImageCreateNestedManyWithoutCostumeInput
  }

  export type CostumeUncheckedCreateWithoutPretsInput = {
    id?: string
    nom: string
    epoque: $Enums.Epoque
    description?: string | null
    taille: string
    couleur: string
    matiere?: string | null
    etat?: $Enums.Etat
    quantiteTotal?: number
    quantiteDispo?: number
    emplacement?: string | null
    proprietaire?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: CostumeImageUncheckedCreateNestedManyWithoutCostumeInput
  }

  export type CostumeCreateOrConnectWithoutPretsInput = {
    where: CostumeWhereUniqueInput
    create: XOR<CostumeCreateWithoutPretsInput, CostumeUncheckedCreateWithoutPretsInput>
  }

  export type CostumeUpsertWithoutPretsInput = {
    update: XOR<CostumeUpdateWithoutPretsInput, CostumeUncheckedUpdateWithoutPretsInput>
    create: XOR<CostumeCreateWithoutPretsInput, CostumeUncheckedCreateWithoutPretsInput>
    where?: CostumeWhereInput
  }

  export type CostumeUpdateToOneWithWhereWithoutPretsInput = {
    where?: CostumeWhereInput
    data: XOR<CostumeUpdateWithoutPretsInput, CostumeUncheckedUpdateWithoutPretsInput>
  }

  export type CostumeUpdateWithoutPretsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: CostumeImageUpdateManyWithoutCostumeNestedInput
  }

  export type CostumeUncheckedUpdateWithoutPretsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    epoque?: EnumEpoqueFieldUpdateOperationsInput | $Enums.Epoque
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    matiere?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: EnumEtatFieldUpdateOperationsInput | $Enums.Etat
    quantiteTotal?: IntFieldUpdateOperationsInput | number
    quantiteDispo?: IntFieldUpdateOperationsInput | number
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    proprietaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: CostumeImageUncheckedUpdateManyWithoutCostumeNestedInput
  }

  export type PretCreateManyCostumeInput = {
    id?: string
    emprunteur: string
    dateDebut?: Date | string
    dateRetourPrevue?: Date | string | null
    dateRetourReelle?: Date | string | null
    statut?: $Enums.StatutPret
    notes?: string | null
  }

  export type CostumeImageCreateManyCostumeInput = {
    id?: string
    url: string
    ordre?: number
    createdAt?: Date | string
  }

  export type PretUpdateWithoutCostumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PretUncheckedUpdateWithoutCostumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PretUncheckedUpdateManyWithoutCostumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    emprunteur?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetourPrevue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRetourReelle?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPretFieldUpdateOperationsInput | $Enums.StatutPret
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CostumeImageUpdateWithoutCostumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumeImageUncheckedUpdateWithoutCostumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumeImageUncheckedUpdateManyWithoutCostumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}