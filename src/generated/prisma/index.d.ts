
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model acceso
 * 
 */
export type acceso = $Result.DefaultSelection<Prisma.$accesoPayload>
/**
 * Model asignaturas
 * 
 */
export type asignaturas = $Result.DefaultSelection<Prisma.$asignaturasPayload>
/**
 * Model aulas
 * 
 */
export type aulas = $Result.DefaultSelection<Prisma.$aulasPayload>
/**
 * Model cargo
 * 
 */
export type cargo = $Result.DefaultSelection<Prisma.$cargoPayload>
/**
 * Model cia
 * 
 */
export type cia = $Result.DefaultSelection<Prisma.$ciaPayload>
/**
 * Model civil
 * 
 */
export type civil = $Result.DefaultSelection<Prisma.$civilPayload>
/**
 * Model datos
 * 
 */
export type datos = $Result.DefaultSelection<Prisma.$datosPayload>
/**
 * Model documento
 * 
 */
export type documento = $Result.DefaultSelection<Prisma.$documentoPayload>
/**
 * Model estado
 * 
 */
export type estado = $Result.DefaultSelection<Prisma.$estadoPayload>
/**
 * Model genero
 * 
 */
export type genero = $Result.DefaultSelection<Prisma.$generoPayload>
/**
 * Model horarios
 * 
 */
export type horarios = $Result.DefaultSelection<Prisma.$horariosPayload>
/**
 * Model laboratorio
 * 
 */
export type laboratorio = $Result.DefaultSelection<Prisma.$laboratorioPayload>
/**
 * Model modulos
 * 
 */
export type modulos = $Result.DefaultSelection<Prisma.$modulosPayload>
/**
 * Model mov_asig_au
 * 
 */
export type mov_asig_au = $Result.DefaultSelection<Prisma.$mov_asig_auPayload>
/**
 * Model pregrado
 * 
 */
export type pregrado = $Result.DefaultSelection<Prisma.$pregradoPayload>
/**
 * Model preofe_mate
 * 
 */
export type preofe_mate = $Result.DefaultSelection<Prisma.$preofe_matePayload>
/**
 * Model semestre
 * 
 */
export type semestre = $Result.DefaultSelection<Prisma.$semestrePayload>
/**
 * Model tipo_status
 * 
 */
export type tipo_status = $Result.DefaultSelection<Prisma.$tipo_statusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accesos
 * const accesos = await prisma.acceso.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accesos
   * const accesos = await prisma.acceso.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.acceso`: Exposes CRUD operations for the **acceso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesos
    * const accesos = await prisma.acceso.findMany()
    * ```
    */
  get acceso(): Prisma.accesoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asignaturas`: Exposes CRUD operations for the **asignaturas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asignaturas
    * const asignaturas = await prisma.asignaturas.findMany()
    * ```
    */
  get asignaturas(): Prisma.asignaturasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aulas`: Exposes CRUD operations for the **aulas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aulas.findMany()
    * ```
    */
  get aulas(): Prisma.aulasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.cargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cia`: Exposes CRUD operations for the **cia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cias
    * const cias = await prisma.cia.findMany()
    * ```
    */
  get cia(): Prisma.ciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.civil`: Exposes CRUD operations for the **civil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Civils
    * const civils = await prisma.civil.findMany()
    * ```
    */
  get civil(): Prisma.civilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datos`: Exposes CRUD operations for the **datos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datos
    * const datos = await prisma.datos.findMany()
    * ```
    */
  get datos(): Prisma.datosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.documentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.estadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.generoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarios`: Exposes CRUD operations for the **horarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horarios.findMany()
    * ```
    */
  get horarios(): Prisma.horariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laboratorio`: Exposes CRUD operations for the **laboratorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laboratorios
    * const laboratorios = await prisma.laboratorio.findMany()
    * ```
    */
  get laboratorio(): Prisma.laboratorioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulos`: Exposes CRUD operations for the **modulos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulos.findMany()
    * ```
    */
  get modulos(): Prisma.modulosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mov_asig_au`: Exposes CRUD operations for the **mov_asig_au** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mov_asig_aus
    * const mov_asig_aus = await prisma.mov_asig_au.findMany()
    * ```
    */
  get mov_asig_au(): Prisma.mov_asig_auDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pregrado`: Exposes CRUD operations for the **pregrado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pregrados
    * const pregrados = await prisma.pregrado.findMany()
    * ```
    */
  get pregrado(): Prisma.pregradoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preofe_mate`: Exposes CRUD operations for the **preofe_mate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preofe_mates
    * const preofe_mates = await prisma.preofe_mate.findMany()
    * ```
    */
  get preofe_mate(): Prisma.preofe_mateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semestre`: Exposes CRUD operations for the **semestre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semestres
    * const semestres = await prisma.semestre.findMany()
    * ```
    */
  get semestre(): Prisma.semestreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo_status`: Exposes CRUD operations for the **tipo_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_statuses
    * const tipo_statuses = await prisma.tipo_status.findMany()
    * ```
    */
  get tipo_status(): Prisma.tipo_statusDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    acceso: 'acceso',
    asignaturas: 'asignaturas',
    aulas: 'aulas',
    cargo: 'cargo',
    cia: 'cia',
    civil: 'civil',
    datos: 'datos',
    documento: 'documento',
    estado: 'estado',
    genero: 'genero',
    horarios: 'horarios',
    laboratorio: 'laboratorio',
    modulos: 'modulos',
    mov_asig_au: 'mov_asig_au',
    pregrado: 'pregrado',
    preofe_mate: 'preofe_mate',
    semestre: 'semestre',
    tipo_status: 'tipo_status'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "acceso" | "asignaturas" | "aulas" | "cargo" | "cia" | "civil" | "datos" | "documento" | "estado" | "genero" | "horarios" | "laboratorio" | "modulos" | "mov_asig_au" | "pregrado" | "preofe_mate" | "semestre" | "tipo_status"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      acceso: {
        payload: Prisma.$accesoPayload<ExtArgs>
        fields: Prisma.accesoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accesoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accesoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>
          }
          findFirst: {
            args: Prisma.accesoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accesoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>
          }
          findMany: {
            args: Prisma.accesoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>[]
          }
          create: {
            args: Prisma.accesoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>
          }
          createMany: {
            args: Prisma.accesoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accesoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>
          }
          update: {
            args: Prisma.accesoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>
          }
          deleteMany: {
            args: Prisma.accesoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accesoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accesoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoPayload>
          }
          aggregate: {
            args: Prisma.AccesoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcceso>
          }
          groupBy: {
            args: Prisma.accesoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccesoGroupByOutputType>[]
          }
          count: {
            args: Prisma.accesoCountArgs<ExtArgs>
            result: $Utils.Optional<AccesoCountAggregateOutputType> | number
          }
        }
      }
      asignaturas: {
        payload: Prisma.$asignaturasPayload<ExtArgs>
        fields: Prisma.asignaturasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asignaturasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asignaturasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>
          }
          findFirst: {
            args: Prisma.asignaturasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asignaturasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>
          }
          findMany: {
            args: Prisma.asignaturasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>[]
          }
          create: {
            args: Prisma.asignaturasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>
          }
          createMany: {
            args: Prisma.asignaturasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.asignaturasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>
          }
          update: {
            args: Prisma.asignaturasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>
          }
          deleteMany: {
            args: Prisma.asignaturasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asignaturasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.asignaturasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asignaturasPayload>
          }
          aggregate: {
            args: Prisma.AsignaturasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignaturas>
          }
          groupBy: {
            args: Prisma.asignaturasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignaturasGroupByOutputType>[]
          }
          count: {
            args: Prisma.asignaturasCountArgs<ExtArgs>
            result: $Utils.Optional<AsignaturasCountAggregateOutputType> | number
          }
        }
      }
      aulas: {
        payload: Prisma.$aulasPayload<ExtArgs>
        fields: Prisma.aulasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aulasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aulasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          findFirst: {
            args: Prisma.aulasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aulasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          findMany: {
            args: Prisma.aulasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>[]
          }
          create: {
            args: Prisma.aulasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          createMany: {
            args: Prisma.aulasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.aulasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          update: {
            args: Prisma.aulasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          deleteMany: {
            args: Prisma.aulasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aulasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.aulasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          aggregate: {
            args: Prisma.AulasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAulas>
          }
          groupBy: {
            args: Prisma.aulasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulasGroupByOutputType>[]
          }
          count: {
            args: Prisma.aulasCountArgs<ExtArgs>
            result: $Utils.Optional<AulasCountAggregateOutputType> | number
          }
        }
      }
      cargo: {
        payload: Prisma.$cargoPayload<ExtArgs>
        fields: Prisma.cargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          findFirst: {
            args: Prisma.cargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          findMany: {
            args: Prisma.cargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>[]
          }
          create: {
            args: Prisma.cargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          createMany: {
            args: Prisma.cargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          update: {
            args: Prisma.cargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          deleteMany: {
            args: Prisma.cargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.cargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      cia: {
        payload: Prisma.$ciaPayload<ExtArgs>
        fields: Prisma.ciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>
          }
          findFirst: {
            args: Prisma.ciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>
          }
          findMany: {
            args: Prisma.ciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>[]
          }
          create: {
            args: Prisma.ciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>
          }
          createMany: {
            args: Prisma.ciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>
          }
          update: {
            args: Prisma.ciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>
          }
          deleteMany: {
            args: Prisma.ciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciaPayload>
          }
          aggregate: {
            args: Prisma.CiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCia>
          }
          groupBy: {
            args: Prisma.ciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ciaCountArgs<ExtArgs>
            result: $Utils.Optional<CiaCountAggregateOutputType> | number
          }
        }
      }
      civil: {
        payload: Prisma.$civilPayload<ExtArgs>
        fields: Prisma.civilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.civilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.civilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>
          }
          findFirst: {
            args: Prisma.civilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.civilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>
          }
          findMany: {
            args: Prisma.civilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>[]
          }
          create: {
            args: Prisma.civilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>
          }
          createMany: {
            args: Prisma.civilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.civilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>
          }
          update: {
            args: Prisma.civilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>
          }
          deleteMany: {
            args: Prisma.civilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.civilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.civilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$civilPayload>
          }
          aggregate: {
            args: Prisma.CivilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCivil>
          }
          groupBy: {
            args: Prisma.civilGroupByArgs<ExtArgs>
            result: $Utils.Optional<CivilGroupByOutputType>[]
          }
          count: {
            args: Prisma.civilCountArgs<ExtArgs>
            result: $Utils.Optional<CivilCountAggregateOutputType> | number
          }
        }
      }
      datos: {
        payload: Prisma.$datosPayload<ExtArgs>
        fields: Prisma.datosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.datosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.datosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          findFirst: {
            args: Prisma.datosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.datosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          findMany: {
            args: Prisma.datosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>[]
          }
          create: {
            args: Prisma.datosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          createMany: {
            args: Prisma.datosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.datosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          update: {
            args: Prisma.datosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          deleteMany: {
            args: Prisma.datosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.datosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.datosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datosPayload>
          }
          aggregate: {
            args: Prisma.DatosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatos>
          }
          groupBy: {
            args: Prisma.datosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatosGroupByOutputType>[]
          }
          count: {
            args: Prisma.datosCountArgs<ExtArgs>
            result: $Utils.Optional<DatosCountAggregateOutputType> | number
          }
        }
      }
      documento: {
        payload: Prisma.$documentoPayload<ExtArgs>
        fields: Prisma.documentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          findFirst: {
            args: Prisma.documentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          findMany: {
            args: Prisma.documentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>[]
          }
          create: {
            args: Prisma.documentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          createMany: {
            args: Prisma.documentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          update: {
            args: Prisma.documentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          deleteMany: {
            args: Prisma.documentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.documentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentoCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
          }
        }
      }
      estado: {
        payload: Prisma.$estadoPayload<ExtArgs>
        fields: Prisma.estadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findFirst: {
            args: Prisma.estadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findMany: {
            args: Prisma.estadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          create: {
            args: Prisma.estadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          createMany: {
            args: Prisma.estadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          update: {
            args: Prisma.estadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          deleteMany: {
            args: Prisma.estadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.estadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.estadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      genero: {
        payload: Prisma.$generoPayload<ExtArgs>
        fields: Prisma.generoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.generoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.generoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          findFirst: {
            args: Prisma.generoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.generoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          findMany: {
            args: Prisma.generoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>[]
          }
          create: {
            args: Prisma.generoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          createMany: {
            args: Prisma.generoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.generoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          update: {
            args: Prisma.generoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          deleteMany: {
            args: Prisma.generoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.generoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.generoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generoPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.generoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.generoCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      horarios: {
        payload: Prisma.$horariosPayload<ExtArgs>
        fields: Prisma.horariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.horariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.horariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findFirst: {
            args: Prisma.horariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.horariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findMany: {
            args: Prisma.horariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          create: {
            args: Prisma.horariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          createMany: {
            args: Prisma.horariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.horariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          update: {
            args: Prisma.horariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          deleteMany: {
            args: Prisma.horariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.horariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.horariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          aggregate: {
            args: Prisma.HorariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarios>
          }
          groupBy: {
            args: Prisma.horariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.horariosCountArgs<ExtArgs>
            result: $Utils.Optional<HorariosCountAggregateOutputType> | number
          }
        }
      }
      laboratorio: {
        payload: Prisma.$laboratorioPayload<ExtArgs>
        fields: Prisma.laboratorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.laboratorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.laboratorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>
          }
          findFirst: {
            args: Prisma.laboratorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.laboratorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>
          }
          findMany: {
            args: Prisma.laboratorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>[]
          }
          create: {
            args: Prisma.laboratorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>
          }
          createMany: {
            args: Prisma.laboratorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.laboratorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>
          }
          update: {
            args: Prisma.laboratorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>
          }
          deleteMany: {
            args: Prisma.laboratorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.laboratorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.laboratorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laboratorioPayload>
          }
          aggregate: {
            args: Prisma.LaboratorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaboratorio>
          }
          groupBy: {
            args: Prisma.laboratorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaboratorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.laboratorioCountArgs<ExtArgs>
            result: $Utils.Optional<LaboratorioCountAggregateOutputType> | number
          }
        }
      }
      modulos: {
        payload: Prisma.$modulosPayload<ExtArgs>
        fields: Prisma.modulosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modulosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modulosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          findFirst: {
            args: Prisma.modulosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modulosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          findMany: {
            args: Prisma.modulosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>[]
          }
          create: {
            args: Prisma.modulosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          createMany: {
            args: Prisma.modulosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.modulosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          update: {
            args: Prisma.modulosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          deleteMany: {
            args: Prisma.modulosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modulosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.modulosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulosPayload>
          }
          aggregate: {
            args: Prisma.ModulosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulos>
          }
          groupBy: {
            args: Prisma.modulosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModulosGroupByOutputType>[]
          }
          count: {
            args: Prisma.modulosCountArgs<ExtArgs>
            result: $Utils.Optional<ModulosCountAggregateOutputType> | number
          }
        }
      }
      mov_asig_au: {
        payload: Prisma.$mov_asig_auPayload<ExtArgs>
        fields: Prisma.mov_asig_auFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mov_asig_auFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mov_asig_auFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>
          }
          findFirst: {
            args: Prisma.mov_asig_auFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mov_asig_auFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>
          }
          findMany: {
            args: Prisma.mov_asig_auFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>[]
          }
          create: {
            args: Prisma.mov_asig_auCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>
          }
          createMany: {
            args: Prisma.mov_asig_auCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mov_asig_auDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>
          }
          update: {
            args: Prisma.mov_asig_auUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>
          }
          deleteMany: {
            args: Prisma.mov_asig_auDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mov_asig_auUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mov_asig_auUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mov_asig_auPayload>
          }
          aggregate: {
            args: Prisma.Mov_asig_auAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMov_asig_au>
          }
          groupBy: {
            args: Prisma.mov_asig_auGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mov_asig_auGroupByOutputType>[]
          }
          count: {
            args: Prisma.mov_asig_auCountArgs<ExtArgs>
            result: $Utils.Optional<Mov_asig_auCountAggregateOutputType> | number
          }
        }
      }
      pregrado: {
        payload: Prisma.$pregradoPayload<ExtArgs>
        fields: Prisma.pregradoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pregradoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pregradoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>
          }
          findFirst: {
            args: Prisma.pregradoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pregradoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>
          }
          findMany: {
            args: Prisma.pregradoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>[]
          }
          create: {
            args: Prisma.pregradoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>
          }
          createMany: {
            args: Prisma.pregradoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pregradoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>
          }
          update: {
            args: Prisma.pregradoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>
          }
          deleteMany: {
            args: Prisma.pregradoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pregradoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pregradoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pregradoPayload>
          }
          aggregate: {
            args: Prisma.PregradoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePregrado>
          }
          groupBy: {
            args: Prisma.pregradoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PregradoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pregradoCountArgs<ExtArgs>
            result: $Utils.Optional<PregradoCountAggregateOutputType> | number
          }
        }
      }
      preofe_mate: {
        payload: Prisma.$preofe_matePayload<ExtArgs>
        fields: Prisma.preofe_mateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preofe_mateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preofe_mateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>
          }
          findFirst: {
            args: Prisma.preofe_mateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preofe_mateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>
          }
          findMany: {
            args: Prisma.preofe_mateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>[]
          }
          create: {
            args: Prisma.preofe_mateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>
          }
          createMany: {
            args: Prisma.preofe_mateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.preofe_mateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>
          }
          update: {
            args: Prisma.preofe_mateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>
          }
          deleteMany: {
            args: Prisma.preofe_mateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preofe_mateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.preofe_mateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preofe_matePayload>
          }
          aggregate: {
            args: Prisma.Preofe_mateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreofe_mate>
          }
          groupBy: {
            args: Prisma.preofe_mateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Preofe_mateGroupByOutputType>[]
          }
          count: {
            args: Prisma.preofe_mateCountArgs<ExtArgs>
            result: $Utils.Optional<Preofe_mateCountAggregateOutputType> | number
          }
        }
      }
      semestre: {
        payload: Prisma.$semestrePayload<ExtArgs>
        fields: Prisma.semestreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.semestreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.semestreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>
          }
          findFirst: {
            args: Prisma.semestreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.semestreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>
          }
          findMany: {
            args: Prisma.semestreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>[]
          }
          create: {
            args: Prisma.semestreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>
          }
          createMany: {
            args: Prisma.semestreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.semestreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>
          }
          update: {
            args: Prisma.semestreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>
          }
          deleteMany: {
            args: Prisma.semestreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.semestreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.semestreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semestrePayload>
          }
          aggregate: {
            args: Prisma.SemestreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemestre>
          }
          groupBy: {
            args: Prisma.semestreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemestreGroupByOutputType>[]
          }
          count: {
            args: Prisma.semestreCountArgs<ExtArgs>
            result: $Utils.Optional<SemestreCountAggregateOutputType> | number
          }
        }
      }
      tipo_status: {
        payload: Prisma.$tipo_statusPayload<ExtArgs>
        fields: Prisma.tipo_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>
          }
          findFirst: {
            args: Prisma.tipo_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>
          }
          findMany: {
            args: Prisma.tipo_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>[]
          }
          create: {
            args: Prisma.tipo_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>
          }
          createMany: {
            args: Prisma.tipo_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>
          }
          update: {
            args: Prisma.tipo_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>
          }
          deleteMany: {
            args: Prisma.tipo_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_statusPayload>
          }
          aggregate: {
            args: Prisma.Tipo_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_status>
          }
          groupBy: {
            args: Prisma.tipo_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_statusCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    acceso?: accesoOmit
    asignaturas?: asignaturasOmit
    aulas?: aulasOmit
    cargo?: cargoOmit
    cia?: ciaOmit
    civil?: civilOmit
    datos?: datosOmit
    documento?: documentoOmit
    estado?: estadoOmit
    genero?: generoOmit
    horarios?: horariosOmit
    laboratorio?: laboratorioOmit
    modulos?: modulosOmit
    mov_asig_au?: mov_asig_auOmit
    pregrado?: pregradoOmit
    preofe_mate?: preofe_mateOmit
    semestre?: semestreOmit
    tipo_status?: tipo_statusOmit
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
   * Count Type AsignaturasCountOutputType
   */

  export type AsignaturasCountOutputType = {
    mov_asig_au: number
    preofe_mate: number
  }

  export type AsignaturasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mov_asig_au?: boolean | AsignaturasCountOutputTypeCountMov_asig_auArgs
    preofe_mate?: boolean | AsignaturasCountOutputTypeCountPreofe_mateArgs
  }

  // Custom InputTypes
  /**
   * AsignaturasCountOutputType without action
   */
  export type AsignaturasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturasCountOutputType
     */
    select?: AsignaturasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsignaturasCountOutputType without action
   */
  export type AsignaturasCountOutputTypeCountMov_asig_auArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mov_asig_auWhereInput
  }

  /**
   * AsignaturasCountOutputType without action
   */
  export type AsignaturasCountOutputTypeCountPreofe_mateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preofe_mateWhereInput
  }


  /**
   * Count Type AulasCountOutputType
   */

  export type AulasCountOutputType = {
    mov_asig_au: number
  }

  export type AulasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mov_asig_au?: boolean | AulasCountOutputTypeCountMov_asig_auArgs
  }

  // Custom InputTypes
  /**
   * AulasCountOutputType without action
   */
  export type AulasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulasCountOutputType
     */
    select?: AulasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AulasCountOutputType without action
   */
  export type AulasCountOutputTypeCountMov_asig_auArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mov_asig_auWhereInput
  }


  /**
   * Count Type CivilCountOutputType
   */

  export type CivilCountOutputType = {
    datos: number
  }

  export type CivilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | CivilCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * CivilCountOutputType without action
   */
  export type CivilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivilCountOutputType
     */
    select?: CivilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CivilCountOutputType without action
   */
  export type CivilCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type DocumentoCountOutputType
   */

  export type DocumentoCountOutputType = {
    datos: number
  }

  export type DocumentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | DocumentoCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoCountOutputType
     */
    select?: DocumentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    civil: number
    documento: number
    genero: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    civil?: boolean | EstadoCountOutputTypeCountCivilArgs
    documento?: boolean | EstadoCountOutputTypeCountDocumentoArgs
    genero?: boolean | EstadoCountOutputTypeCountGeneroArgs
  }

  // Custom InputTypes
  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountCivilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: civilWhereInput
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountDocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentoWhereInput
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountGeneroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generoWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    datos: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | GeneroCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type HorariosCountOutputType
   */

  export type HorariosCountOutputType = {
    mov_asig_au: number
  }

  export type HorariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mov_asig_au?: boolean | HorariosCountOutputTypeCountMov_asig_auArgs
  }

  // Custom InputTypes
  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorariosCountOutputType
     */
    select?: HorariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeCountMov_asig_auArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mov_asig_auWhereInput
  }


  /**
   * Count Type ModulosCountOutputType
   */

  export type ModulosCountOutputType = {
    acceso: number
  }

  export type ModulosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceso?: boolean | ModulosCountOutputTypeCountAccesoArgs
  }

  // Custom InputTypes
  /**
   * ModulosCountOutputType without action
   */
  export type ModulosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModulosCountOutputType
     */
    select?: ModulosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModulosCountOutputType without action
   */
  export type ModulosCountOutputTypeCountAccesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accesoWhereInput
  }


  /**
   * Count Type PregradoCountOutputType
   */

  export type PregradoCountOutputType = {
    preofe_mate: number
    semestre: number
    datos: number
  }

  export type PregradoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preofe_mate?: boolean | PregradoCountOutputTypeCountPreofe_mateArgs
    semestre?: boolean | PregradoCountOutputTypeCountSemestreArgs
    datos?: boolean | PregradoCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * PregradoCountOutputType without action
   */
  export type PregradoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PregradoCountOutputType
     */
    select?: PregradoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PregradoCountOutputType without action
   */
  export type PregradoCountOutputTypeCountPreofe_mateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preofe_mateWhereInput
  }

  /**
   * PregradoCountOutputType without action
   */
  export type PregradoCountOutputTypeCountSemestreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semestreWhereInput
  }

  /**
   * PregradoCountOutputType without action
   */
  export type PregradoCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type SemestreCountOutputType
   */

  export type SemestreCountOutputType = {
    datos: number
  }

  export type SemestreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | SemestreCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * SemestreCountOutputType without action
   */
  export type SemestreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemestreCountOutputType
     */
    select?: SemestreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemestreCountOutputType without action
   */
  export type SemestreCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Count Type Tipo_statusCountOutputType
   */

  export type Tipo_statusCountOutputType = {
    datos: number
  }

  export type Tipo_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | Tipo_statusCountOutputTypeCountDatosArgs
  }

  // Custom InputTypes
  /**
   * Tipo_statusCountOutputType without action
   */
  export type Tipo_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_statusCountOutputType
     */
    select?: Tipo_statusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_statusCountOutputType without action
   */
  export type Tipo_statusCountOutputTypeCountDatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model acceso
   */

  export type AggregateAcceso = {
    _count: AccesoCountAggregateOutputType | null
    _avg: AccesoAvgAggregateOutputType | null
    _sum: AccesoSumAggregateOutputType | null
    _min: AccesoMinAggregateOutputType | null
    _max: AccesoMaxAggregateOutputType | null
  }

  export type AccesoAvgAggregateOutputType = {
    pk_acceso: number | null
    fk_modulo: number | null
  }

  export type AccesoSumAggregateOutputType = {
    pk_acceso: number | null
    fk_modulo: number | null
  }

  export type AccesoMinAggregateOutputType = {
    pk_acceso: number | null
    usuario: string | null
    contrasena: string | null
    fk_modulo: number | null
  }

  export type AccesoMaxAggregateOutputType = {
    pk_acceso: number | null
    usuario: string | null
    contrasena: string | null
    fk_modulo: number | null
  }

  export type AccesoCountAggregateOutputType = {
    pk_acceso: number
    usuario: number
    contrasena: number
    fk_modulo: number
    _all: number
  }


  export type AccesoAvgAggregateInputType = {
    pk_acceso?: true
    fk_modulo?: true
  }

  export type AccesoSumAggregateInputType = {
    pk_acceso?: true
    fk_modulo?: true
  }

  export type AccesoMinAggregateInputType = {
    pk_acceso?: true
    usuario?: true
    contrasena?: true
    fk_modulo?: true
  }

  export type AccesoMaxAggregateInputType = {
    pk_acceso?: true
    usuario?: true
    contrasena?: true
    fk_modulo?: true
  }

  export type AccesoCountAggregateInputType = {
    pk_acceso?: true
    usuario?: true
    contrasena?: true
    fk_modulo?: true
    _all?: true
  }

  export type AccesoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which acceso to aggregate.
     */
    where?: accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesos to fetch.
     */
    orderBy?: accesoOrderByWithRelationInput | accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accesos
    **/
    _count?: true | AccesoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccesoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccesoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccesoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccesoMaxAggregateInputType
  }

  export type GetAccesoAggregateType<T extends AccesoAggregateArgs> = {
        [P in keyof T & keyof AggregateAcceso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcceso[P]>
      : GetScalarType<T[P], AggregateAcceso[P]>
  }




  export type accesoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accesoWhereInput
    orderBy?: accesoOrderByWithAggregationInput | accesoOrderByWithAggregationInput[]
    by: AccesoScalarFieldEnum[] | AccesoScalarFieldEnum
    having?: accesoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccesoCountAggregateInputType | true
    _avg?: AccesoAvgAggregateInputType
    _sum?: AccesoSumAggregateInputType
    _min?: AccesoMinAggregateInputType
    _max?: AccesoMaxAggregateInputType
  }

  export type AccesoGroupByOutputType = {
    pk_acceso: number
    usuario: string | null
    contrasena: string | null
    fk_modulo: number | null
    _count: AccesoCountAggregateOutputType | null
    _avg: AccesoAvgAggregateOutputType | null
    _sum: AccesoSumAggregateOutputType | null
    _min: AccesoMinAggregateOutputType | null
    _max: AccesoMaxAggregateOutputType | null
  }

  type GetAccesoGroupByPayload<T extends accesoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccesoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccesoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccesoGroupByOutputType[P]>
            : GetScalarType<T[P], AccesoGroupByOutputType[P]>
        }
      >
    >


  export type accesoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_acceso?: boolean
    usuario?: boolean
    contrasena?: boolean
    fk_modulo?: boolean
    modulos?: boolean | acceso$modulosArgs<ExtArgs>
  }, ExtArgs["result"]["acceso"]>



  export type accesoSelectScalar = {
    pk_acceso?: boolean
    usuario?: boolean
    contrasena?: boolean
    fk_modulo?: boolean
  }

  export type accesoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_acceso" | "usuario" | "contrasena" | "fk_modulo", ExtArgs["result"]["acceso"]>
  export type accesoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulos?: boolean | acceso$modulosArgs<ExtArgs>
  }

  export type $accesoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "acceso"
    objects: {
      modulos: Prisma.$modulosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_acceso: number
      usuario: string | null
      contrasena: string | null
      fk_modulo: number | null
    }, ExtArgs["result"]["acceso"]>
    composites: {}
  }

  type accesoGetPayload<S extends boolean | null | undefined | accesoDefaultArgs> = $Result.GetResult<Prisma.$accesoPayload, S>

  type accesoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accesoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccesoCountAggregateInputType | true
    }

  export interface accesoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['acceso'], meta: { name: 'acceso' } }
    /**
     * Find zero or one Acceso that matches the filter.
     * @param {accesoFindUniqueArgs} args - Arguments to find a Acceso
     * @example
     * // Get one Acceso
     * const acceso = await prisma.acceso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accesoFindUniqueArgs>(args: SelectSubset<T, accesoFindUniqueArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acceso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accesoFindUniqueOrThrowArgs} args - Arguments to find a Acceso
     * @example
     * // Get one Acceso
     * const acceso = await prisma.acceso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accesoFindUniqueOrThrowArgs>(args: SelectSubset<T, accesoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acceso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoFindFirstArgs} args - Arguments to find a Acceso
     * @example
     * // Get one Acceso
     * const acceso = await prisma.acceso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accesoFindFirstArgs>(args?: SelectSubset<T, accesoFindFirstArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acceso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoFindFirstOrThrowArgs} args - Arguments to find a Acceso
     * @example
     * // Get one Acceso
     * const acceso = await prisma.acceso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accesoFindFirstOrThrowArgs>(args?: SelectSubset<T, accesoFindFirstOrThrowArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accesos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesos
     * const accesos = await prisma.acceso.findMany()
     * 
     * // Get first 10 Accesos
     * const accesos = await prisma.acceso.findMany({ take: 10 })
     * 
     * // Only select the `pk_acceso`
     * const accesoWithPk_accesoOnly = await prisma.acceso.findMany({ select: { pk_acceso: true } })
     * 
     */
    findMany<T extends accesoFindManyArgs>(args?: SelectSubset<T, accesoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acceso.
     * @param {accesoCreateArgs} args - Arguments to create a Acceso.
     * @example
     * // Create one Acceso
     * const Acceso = await prisma.acceso.create({
     *   data: {
     *     // ... data to create a Acceso
     *   }
     * })
     * 
     */
    create<T extends accesoCreateArgs>(args: SelectSubset<T, accesoCreateArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accesos.
     * @param {accesoCreateManyArgs} args - Arguments to create many Accesos.
     * @example
     * // Create many Accesos
     * const acceso = await prisma.acceso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accesoCreateManyArgs>(args?: SelectSubset<T, accesoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Acceso.
     * @param {accesoDeleteArgs} args - Arguments to delete one Acceso.
     * @example
     * // Delete one Acceso
     * const Acceso = await prisma.acceso.delete({
     *   where: {
     *     // ... filter to delete one Acceso
     *   }
     * })
     * 
     */
    delete<T extends accesoDeleteArgs>(args: SelectSubset<T, accesoDeleteArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acceso.
     * @param {accesoUpdateArgs} args - Arguments to update one Acceso.
     * @example
     * // Update one Acceso
     * const acceso = await prisma.acceso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accesoUpdateArgs>(args: SelectSubset<T, accesoUpdateArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accesos.
     * @param {accesoDeleteManyArgs} args - Arguments to filter Accesos to delete.
     * @example
     * // Delete a few Accesos
     * const { count } = await prisma.acceso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accesoDeleteManyArgs>(args?: SelectSubset<T, accesoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesos
     * const acceso = await prisma.acceso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accesoUpdateManyArgs>(args: SelectSubset<T, accesoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Acceso.
     * @param {accesoUpsertArgs} args - Arguments to update or create a Acceso.
     * @example
     * // Update or create a Acceso
     * const acceso = await prisma.acceso.upsert({
     *   create: {
     *     // ... data to create a Acceso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acceso we want to update
     *   }
     * })
     */
    upsert<T extends accesoUpsertArgs>(args: SelectSubset<T, accesoUpsertArgs<ExtArgs>>): Prisma__accesoClient<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoCountArgs} args - Arguments to filter Accesos to count.
     * @example
     * // Count the number of Accesos
     * const count = await prisma.acceso.count({
     *   where: {
     *     // ... the filter for the Accesos we want to count
     *   }
     * })
    **/
    count<T extends accesoCountArgs>(
      args?: Subset<T, accesoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccesoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccesoAggregateArgs>(args: Subset<T, AccesoAggregateArgs>): Prisma.PrismaPromise<GetAccesoAggregateType<T>>

    /**
     * Group by Acceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoGroupByArgs} args - Group by arguments.
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
      T extends accesoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accesoGroupByArgs['orderBy'] }
        : { orderBy?: accesoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accesoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccesoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the acceso model
   */
  readonly fields: accesoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for acceso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accesoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulos<T extends acceso$modulosArgs<ExtArgs> = {}>(args?: Subset<T, acceso$modulosArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the acceso model
   */
  interface accesoFieldRefs {
    readonly pk_acceso: FieldRef<"acceso", 'Int'>
    readonly usuario: FieldRef<"acceso", 'String'>
    readonly contrasena: FieldRef<"acceso", 'String'>
    readonly fk_modulo: FieldRef<"acceso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * acceso findUnique
   */
  export type accesoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * Filter, which acceso to fetch.
     */
    where: accesoWhereUniqueInput
  }

  /**
   * acceso findUniqueOrThrow
   */
  export type accesoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * Filter, which acceso to fetch.
     */
    where: accesoWhereUniqueInput
  }

  /**
   * acceso findFirst
   */
  export type accesoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * Filter, which acceso to fetch.
     */
    where?: accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesos to fetch.
     */
    orderBy?: accesoOrderByWithRelationInput | accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accesos.
     */
    cursor?: accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accesos.
     */
    distinct?: AccesoScalarFieldEnum | AccesoScalarFieldEnum[]
  }

  /**
   * acceso findFirstOrThrow
   */
  export type accesoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * Filter, which acceso to fetch.
     */
    where?: accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesos to fetch.
     */
    orderBy?: accesoOrderByWithRelationInput | accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accesos.
     */
    cursor?: accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accesos.
     */
    distinct?: AccesoScalarFieldEnum | AccesoScalarFieldEnum[]
  }

  /**
   * acceso findMany
   */
  export type accesoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * Filter, which accesos to fetch.
     */
    where?: accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesos to fetch.
     */
    orderBy?: accesoOrderByWithRelationInput | accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accesos.
     */
    cursor?: accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesos.
     */
    skip?: number
    distinct?: AccesoScalarFieldEnum | AccesoScalarFieldEnum[]
  }

  /**
   * acceso create
   */
  export type accesoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * The data needed to create a acceso.
     */
    data?: XOR<accesoCreateInput, accesoUncheckedCreateInput>
  }

  /**
   * acceso createMany
   */
  export type accesoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accesos.
     */
    data: accesoCreateManyInput | accesoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * acceso update
   */
  export type accesoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * The data needed to update a acceso.
     */
    data: XOR<accesoUpdateInput, accesoUncheckedUpdateInput>
    /**
     * Choose, which acceso to update.
     */
    where: accesoWhereUniqueInput
  }

  /**
   * acceso updateMany
   */
  export type accesoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accesos.
     */
    data: XOR<accesoUpdateManyMutationInput, accesoUncheckedUpdateManyInput>
    /**
     * Filter which accesos to update
     */
    where?: accesoWhereInput
    /**
     * Limit how many accesos to update.
     */
    limit?: number
  }

  /**
   * acceso upsert
   */
  export type accesoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * The filter to search for the acceso to update in case it exists.
     */
    where: accesoWhereUniqueInput
    /**
     * In case the acceso found by the `where` argument doesn't exist, create a new acceso with this data.
     */
    create: XOR<accesoCreateInput, accesoUncheckedCreateInput>
    /**
     * In case the acceso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accesoUpdateInput, accesoUncheckedUpdateInput>
  }

  /**
   * acceso delete
   */
  export type accesoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    /**
     * Filter which acceso to delete.
     */
    where: accesoWhereUniqueInput
  }

  /**
   * acceso deleteMany
   */
  export type accesoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accesos to delete
     */
    where?: accesoWhereInput
    /**
     * Limit how many accesos to delete.
     */
    limit?: number
  }

  /**
   * acceso.modulos
   */
  export type acceso$modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    where?: modulosWhereInput
  }

  /**
   * acceso without action
   */
  export type accesoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
  }


  /**
   * Model asignaturas
   */

  export type AggregateAsignaturas = {
    _count: AsignaturasCountAggregateOutputType | null
    _avg: AsignaturasAvgAggregateOutputType | null
    _sum: AsignaturasSumAggregateOutputType | null
    _min: AsignaturasMinAggregateOutputType | null
    _max: AsignaturasMaxAggregateOutputType | null
  }

  export type AsignaturasAvgAggregateOutputType = {
    pk_asignatura: number | null
  }

  export type AsignaturasSumAggregateOutputType = {
    pk_asignatura: number | null
  }

  export type AsignaturasMinAggregateOutputType = {
    pk_asignatura: number | null
    nombre_asignatura: string | null
    codigo: string | null
  }

  export type AsignaturasMaxAggregateOutputType = {
    pk_asignatura: number | null
    nombre_asignatura: string | null
    codigo: string | null
  }

  export type AsignaturasCountAggregateOutputType = {
    pk_asignatura: number
    nombre_asignatura: number
    codigo: number
    _all: number
  }


  export type AsignaturasAvgAggregateInputType = {
    pk_asignatura?: true
  }

  export type AsignaturasSumAggregateInputType = {
    pk_asignatura?: true
  }

  export type AsignaturasMinAggregateInputType = {
    pk_asignatura?: true
    nombre_asignatura?: true
    codigo?: true
  }

  export type AsignaturasMaxAggregateInputType = {
    pk_asignatura?: true
    nombre_asignatura?: true
    codigo?: true
  }

  export type AsignaturasCountAggregateInputType = {
    pk_asignatura?: true
    nombre_asignatura?: true
    codigo?: true
    _all?: true
  }

  export type AsignaturasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asignaturas to aggregate.
     */
    where?: asignaturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asignaturas to fetch.
     */
    orderBy?: asignaturasOrderByWithRelationInput | asignaturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asignaturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asignaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asignaturas
    **/
    _count?: true | AsignaturasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsignaturasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsignaturasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignaturasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignaturasMaxAggregateInputType
  }

  export type GetAsignaturasAggregateType<T extends AsignaturasAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignaturas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignaturas[P]>
      : GetScalarType<T[P], AggregateAsignaturas[P]>
  }




  export type asignaturasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asignaturasWhereInput
    orderBy?: asignaturasOrderByWithAggregationInput | asignaturasOrderByWithAggregationInput[]
    by: AsignaturasScalarFieldEnum[] | AsignaturasScalarFieldEnum
    having?: asignaturasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignaturasCountAggregateInputType | true
    _avg?: AsignaturasAvgAggregateInputType
    _sum?: AsignaturasSumAggregateInputType
    _min?: AsignaturasMinAggregateInputType
    _max?: AsignaturasMaxAggregateInputType
  }

  export type AsignaturasGroupByOutputType = {
    pk_asignatura: number
    nombre_asignatura: string | null
    codigo: string | null
    _count: AsignaturasCountAggregateOutputType | null
    _avg: AsignaturasAvgAggregateOutputType | null
    _sum: AsignaturasSumAggregateOutputType | null
    _min: AsignaturasMinAggregateOutputType | null
    _max: AsignaturasMaxAggregateOutputType | null
  }

  type GetAsignaturasGroupByPayload<T extends asignaturasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignaturasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignaturasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignaturasGroupByOutputType[P]>
            : GetScalarType<T[P], AsignaturasGroupByOutputType[P]>
        }
      >
    >


  export type asignaturasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_asignatura?: boolean
    nombre_asignatura?: boolean
    codigo?: boolean
    mov_asig_au?: boolean | asignaturas$mov_asig_auArgs<ExtArgs>
    preofe_mate?: boolean | asignaturas$preofe_mateArgs<ExtArgs>
    _count?: boolean | AsignaturasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignaturas"]>



  export type asignaturasSelectScalar = {
    pk_asignatura?: boolean
    nombre_asignatura?: boolean
    codigo?: boolean
  }

  export type asignaturasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_asignatura" | "nombre_asignatura" | "codigo", ExtArgs["result"]["asignaturas"]>
  export type asignaturasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mov_asig_au?: boolean | asignaturas$mov_asig_auArgs<ExtArgs>
    preofe_mate?: boolean | asignaturas$preofe_mateArgs<ExtArgs>
    _count?: boolean | AsignaturasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $asignaturasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asignaturas"
    objects: {
      mov_asig_au: Prisma.$mov_asig_auPayload<ExtArgs>[]
      preofe_mate: Prisma.$preofe_matePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_asignatura: number
      nombre_asignatura: string | null
      codigo: string | null
    }, ExtArgs["result"]["asignaturas"]>
    composites: {}
  }

  type asignaturasGetPayload<S extends boolean | null | undefined | asignaturasDefaultArgs> = $Result.GetResult<Prisma.$asignaturasPayload, S>

  type asignaturasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<asignaturasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignaturasCountAggregateInputType | true
    }

  export interface asignaturasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asignaturas'], meta: { name: 'asignaturas' } }
    /**
     * Find zero or one Asignaturas that matches the filter.
     * @param {asignaturasFindUniqueArgs} args - Arguments to find a Asignaturas
     * @example
     * // Get one Asignaturas
     * const asignaturas = await prisma.asignaturas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asignaturasFindUniqueArgs>(args: SelectSubset<T, asignaturasFindUniqueArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asignaturas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {asignaturasFindUniqueOrThrowArgs} args - Arguments to find a Asignaturas
     * @example
     * // Get one Asignaturas
     * const asignaturas = await prisma.asignaturas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asignaturasFindUniqueOrThrowArgs>(args: SelectSubset<T, asignaturasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asignaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asignaturasFindFirstArgs} args - Arguments to find a Asignaturas
     * @example
     * // Get one Asignaturas
     * const asignaturas = await prisma.asignaturas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asignaturasFindFirstArgs>(args?: SelectSubset<T, asignaturasFindFirstArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asignaturas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asignaturasFindFirstOrThrowArgs} args - Arguments to find a Asignaturas
     * @example
     * // Get one Asignaturas
     * const asignaturas = await prisma.asignaturas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asignaturasFindFirstOrThrowArgs>(args?: SelectSubset<T, asignaturasFindFirstOrThrowArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asignaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asignaturasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asignaturas
     * const asignaturas = await prisma.asignaturas.findMany()
     * 
     * // Get first 10 Asignaturas
     * const asignaturas = await prisma.asignaturas.findMany({ take: 10 })
     * 
     * // Only select the `pk_asignatura`
     * const asignaturasWithPk_asignaturaOnly = await prisma.asignaturas.findMany({ select: { pk_asignatura: true } })
     * 
     */
    findMany<T extends asignaturasFindManyArgs>(args?: SelectSubset<T, asignaturasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asignaturas.
     * @param {asignaturasCreateArgs} args - Arguments to create a Asignaturas.
     * @example
     * // Create one Asignaturas
     * const Asignaturas = await prisma.asignaturas.create({
     *   data: {
     *     // ... data to create a Asignaturas
     *   }
     * })
     * 
     */
    create<T extends asignaturasCreateArgs>(args: SelectSubset<T, asignaturasCreateArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asignaturas.
     * @param {asignaturasCreateManyArgs} args - Arguments to create many Asignaturas.
     * @example
     * // Create many Asignaturas
     * const asignaturas = await prisma.asignaturas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asignaturasCreateManyArgs>(args?: SelectSubset<T, asignaturasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asignaturas.
     * @param {asignaturasDeleteArgs} args - Arguments to delete one Asignaturas.
     * @example
     * // Delete one Asignaturas
     * const Asignaturas = await prisma.asignaturas.delete({
     *   where: {
     *     // ... filter to delete one Asignaturas
     *   }
     * })
     * 
     */
    delete<T extends asignaturasDeleteArgs>(args: SelectSubset<T, asignaturasDeleteArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asignaturas.
     * @param {asignaturasUpdateArgs} args - Arguments to update one Asignaturas.
     * @example
     * // Update one Asignaturas
     * const asignaturas = await prisma.asignaturas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asignaturasUpdateArgs>(args: SelectSubset<T, asignaturasUpdateArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asignaturas.
     * @param {asignaturasDeleteManyArgs} args - Arguments to filter Asignaturas to delete.
     * @example
     * // Delete a few Asignaturas
     * const { count } = await prisma.asignaturas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asignaturasDeleteManyArgs>(args?: SelectSubset<T, asignaturasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asignaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asignaturasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asignaturas
     * const asignaturas = await prisma.asignaturas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asignaturasUpdateManyArgs>(args: SelectSubset<T, asignaturasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asignaturas.
     * @param {asignaturasUpsertArgs} args - Arguments to update or create a Asignaturas.
     * @example
     * // Update or create a Asignaturas
     * const asignaturas = await prisma.asignaturas.upsert({
     *   create: {
     *     // ... data to create a Asignaturas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asignaturas we want to update
     *   }
     * })
     */
    upsert<T extends asignaturasUpsertArgs>(args: SelectSubset<T, asignaturasUpsertArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asignaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asignaturasCountArgs} args - Arguments to filter Asignaturas to count.
     * @example
     * // Count the number of Asignaturas
     * const count = await prisma.asignaturas.count({
     *   where: {
     *     // ... the filter for the Asignaturas we want to count
     *   }
     * })
    **/
    count<T extends asignaturasCountArgs>(
      args?: Subset<T, asignaturasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignaturasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asignaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsignaturasAggregateArgs>(args: Subset<T, AsignaturasAggregateArgs>): Prisma.PrismaPromise<GetAsignaturasAggregateType<T>>

    /**
     * Group by Asignaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asignaturasGroupByArgs} args - Group by arguments.
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
      T extends asignaturasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asignaturasGroupByArgs['orderBy'] }
        : { orderBy?: asignaturasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, asignaturasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignaturasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asignaturas model
   */
  readonly fields: asignaturasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asignaturas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asignaturasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mov_asig_au<T extends asignaturas$mov_asig_auArgs<ExtArgs> = {}>(args?: Subset<T, asignaturas$mov_asig_auArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preofe_mate<T extends asignaturas$preofe_mateArgs<ExtArgs> = {}>(args?: Subset<T, asignaturas$preofe_mateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the asignaturas model
   */
  interface asignaturasFieldRefs {
    readonly pk_asignatura: FieldRef<"asignaturas", 'Int'>
    readonly nombre_asignatura: FieldRef<"asignaturas", 'String'>
    readonly codigo: FieldRef<"asignaturas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * asignaturas findUnique
   */
  export type asignaturasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * Filter, which asignaturas to fetch.
     */
    where: asignaturasWhereUniqueInput
  }

  /**
   * asignaturas findUniqueOrThrow
   */
  export type asignaturasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * Filter, which asignaturas to fetch.
     */
    where: asignaturasWhereUniqueInput
  }

  /**
   * asignaturas findFirst
   */
  export type asignaturasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * Filter, which asignaturas to fetch.
     */
    where?: asignaturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asignaturas to fetch.
     */
    orderBy?: asignaturasOrderByWithRelationInput | asignaturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asignaturas.
     */
    cursor?: asignaturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asignaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asignaturas.
     */
    distinct?: AsignaturasScalarFieldEnum | AsignaturasScalarFieldEnum[]
  }

  /**
   * asignaturas findFirstOrThrow
   */
  export type asignaturasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * Filter, which asignaturas to fetch.
     */
    where?: asignaturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asignaturas to fetch.
     */
    orderBy?: asignaturasOrderByWithRelationInput | asignaturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asignaturas.
     */
    cursor?: asignaturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asignaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asignaturas.
     */
    distinct?: AsignaturasScalarFieldEnum | AsignaturasScalarFieldEnum[]
  }

  /**
   * asignaturas findMany
   */
  export type asignaturasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * Filter, which asignaturas to fetch.
     */
    where?: asignaturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asignaturas to fetch.
     */
    orderBy?: asignaturasOrderByWithRelationInput | asignaturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asignaturas.
     */
    cursor?: asignaturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asignaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asignaturas.
     */
    skip?: number
    distinct?: AsignaturasScalarFieldEnum | AsignaturasScalarFieldEnum[]
  }

  /**
   * asignaturas create
   */
  export type asignaturasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * The data needed to create a asignaturas.
     */
    data?: XOR<asignaturasCreateInput, asignaturasUncheckedCreateInput>
  }

  /**
   * asignaturas createMany
   */
  export type asignaturasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asignaturas.
     */
    data: asignaturasCreateManyInput | asignaturasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asignaturas update
   */
  export type asignaturasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * The data needed to update a asignaturas.
     */
    data: XOR<asignaturasUpdateInput, asignaturasUncheckedUpdateInput>
    /**
     * Choose, which asignaturas to update.
     */
    where: asignaturasWhereUniqueInput
  }

  /**
   * asignaturas updateMany
   */
  export type asignaturasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asignaturas.
     */
    data: XOR<asignaturasUpdateManyMutationInput, asignaturasUncheckedUpdateManyInput>
    /**
     * Filter which asignaturas to update
     */
    where?: asignaturasWhereInput
    /**
     * Limit how many asignaturas to update.
     */
    limit?: number
  }

  /**
   * asignaturas upsert
   */
  export type asignaturasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * The filter to search for the asignaturas to update in case it exists.
     */
    where: asignaturasWhereUniqueInput
    /**
     * In case the asignaturas found by the `where` argument doesn't exist, create a new asignaturas with this data.
     */
    create: XOR<asignaturasCreateInput, asignaturasUncheckedCreateInput>
    /**
     * In case the asignaturas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asignaturasUpdateInput, asignaturasUncheckedUpdateInput>
  }

  /**
   * asignaturas delete
   */
  export type asignaturasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    /**
     * Filter which asignaturas to delete.
     */
    where: asignaturasWhereUniqueInput
  }

  /**
   * asignaturas deleteMany
   */
  export type asignaturasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asignaturas to delete
     */
    where?: asignaturasWhereInput
    /**
     * Limit how many asignaturas to delete.
     */
    limit?: number
  }

  /**
   * asignaturas.mov_asig_au
   */
  export type asignaturas$mov_asig_auArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    where?: mov_asig_auWhereInput
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    cursor?: mov_asig_auWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mov_asig_auScalarFieldEnum | Mov_asig_auScalarFieldEnum[]
  }

  /**
   * asignaturas.preofe_mate
   */
  export type asignaturas$preofe_mateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    where?: preofe_mateWhereInput
    orderBy?: preofe_mateOrderByWithRelationInput | preofe_mateOrderByWithRelationInput[]
    cursor?: preofe_mateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Preofe_mateScalarFieldEnum | Preofe_mateScalarFieldEnum[]
  }

  /**
   * asignaturas without action
   */
  export type asignaturasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
  }


  /**
   * Model aulas
   */

  export type AggregateAulas = {
    _count: AulasCountAggregateOutputType | null
    _avg: AulasAvgAggregateOutputType | null
    _sum: AulasSumAggregateOutputType | null
    _min: AulasMinAggregateOutputType | null
    _max: AulasMaxAggregateOutputType | null
  }

  export type AulasAvgAggregateOutputType = {
    pk_aula: number | null
    capacidad: number | null
  }

  export type AulasSumAggregateOutputType = {
    pk_aula: number | null
    capacidad: number | null
  }

  export type AulasMinAggregateOutputType = {
    pk_aula: number | null
    nombre_aula: string | null
    capacidad: number | null
  }

  export type AulasMaxAggregateOutputType = {
    pk_aula: number | null
    nombre_aula: string | null
    capacidad: number | null
  }

  export type AulasCountAggregateOutputType = {
    pk_aula: number
    nombre_aula: number
    capacidad: number
    _all: number
  }


  export type AulasAvgAggregateInputType = {
    pk_aula?: true
    capacidad?: true
  }

  export type AulasSumAggregateInputType = {
    pk_aula?: true
    capacidad?: true
  }

  export type AulasMinAggregateInputType = {
    pk_aula?: true
    nombre_aula?: true
    capacidad?: true
  }

  export type AulasMaxAggregateInputType = {
    pk_aula?: true
    nombre_aula?: true
    capacidad?: true
  }

  export type AulasCountAggregateInputType = {
    pk_aula?: true
    nombre_aula?: true
    capacidad?: true
    _all?: true
  }

  export type AulasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aulas to aggregate.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aulas
    **/
    _count?: true | AulasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulasMaxAggregateInputType
  }

  export type GetAulasAggregateType<T extends AulasAggregateArgs> = {
        [P in keyof T & keyof AggregateAulas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAulas[P]>
      : GetScalarType<T[P], AggregateAulas[P]>
  }




  export type aulasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aulasWhereInput
    orderBy?: aulasOrderByWithAggregationInput | aulasOrderByWithAggregationInput[]
    by: AulasScalarFieldEnum[] | AulasScalarFieldEnum
    having?: aulasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulasCountAggregateInputType | true
    _avg?: AulasAvgAggregateInputType
    _sum?: AulasSumAggregateInputType
    _min?: AulasMinAggregateInputType
    _max?: AulasMaxAggregateInputType
  }

  export type AulasGroupByOutputType = {
    pk_aula: number
    nombre_aula: string | null
    capacidad: number | null
    _count: AulasCountAggregateOutputType | null
    _avg: AulasAvgAggregateOutputType | null
    _sum: AulasSumAggregateOutputType | null
    _min: AulasMinAggregateOutputType | null
    _max: AulasMaxAggregateOutputType | null
  }

  type GetAulasGroupByPayload<T extends aulasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulasGroupByOutputType[P]>
            : GetScalarType<T[P], AulasGroupByOutputType[P]>
        }
      >
    >


  export type aulasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_aula?: boolean
    nombre_aula?: boolean
    capacidad?: boolean
    mov_asig_au?: boolean | aulas$mov_asig_auArgs<ExtArgs>
    _count?: boolean | AulasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aulas"]>



  export type aulasSelectScalar = {
    pk_aula?: boolean
    nombre_aula?: boolean
    capacidad?: boolean
  }

  export type aulasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_aula" | "nombre_aula" | "capacidad", ExtArgs["result"]["aulas"]>
  export type aulasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mov_asig_au?: boolean | aulas$mov_asig_auArgs<ExtArgs>
    _count?: boolean | AulasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $aulasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aulas"
    objects: {
      mov_asig_au: Prisma.$mov_asig_auPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_aula: number
      nombre_aula: string | null
      capacidad: number | null
    }, ExtArgs["result"]["aulas"]>
    composites: {}
  }

  type aulasGetPayload<S extends boolean | null | undefined | aulasDefaultArgs> = $Result.GetResult<Prisma.$aulasPayload, S>

  type aulasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aulasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AulasCountAggregateInputType | true
    }

  export interface aulasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aulas'], meta: { name: 'aulas' } }
    /**
     * Find zero or one Aulas that matches the filter.
     * @param {aulasFindUniqueArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aulasFindUniqueArgs>(args: SelectSubset<T, aulasFindUniqueArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aulas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aulasFindUniqueOrThrowArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aulasFindUniqueOrThrowArgs>(args: SelectSubset<T, aulasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasFindFirstArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aulasFindFirstArgs>(args?: SelectSubset<T, aulasFindFirstArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aulas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasFindFirstOrThrowArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aulasFindFirstOrThrowArgs>(args?: SelectSubset<T, aulasFindFirstOrThrowArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aulas.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aulas.findMany({ take: 10 })
     * 
     * // Only select the `pk_aula`
     * const aulasWithPk_aulaOnly = await prisma.aulas.findMany({ select: { pk_aula: true } })
     * 
     */
    findMany<T extends aulasFindManyArgs>(args?: SelectSubset<T, aulasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aulas.
     * @param {aulasCreateArgs} args - Arguments to create a Aulas.
     * @example
     * // Create one Aulas
     * const Aulas = await prisma.aulas.create({
     *   data: {
     *     // ... data to create a Aulas
     *   }
     * })
     * 
     */
    create<T extends aulasCreateArgs>(args: SelectSubset<T, aulasCreateArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aulas.
     * @param {aulasCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aulas = await prisma.aulas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aulasCreateManyArgs>(args?: SelectSubset<T, aulasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aulas.
     * @param {aulasDeleteArgs} args - Arguments to delete one Aulas.
     * @example
     * // Delete one Aulas
     * const Aulas = await prisma.aulas.delete({
     *   where: {
     *     // ... filter to delete one Aulas
     *   }
     * })
     * 
     */
    delete<T extends aulasDeleteArgs>(args: SelectSubset<T, aulasDeleteArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aulas.
     * @param {aulasUpdateArgs} args - Arguments to update one Aulas.
     * @example
     * // Update one Aulas
     * const aulas = await prisma.aulas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aulasUpdateArgs>(args: SelectSubset<T, aulasUpdateArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aulas.
     * @param {aulasDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aulas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aulasDeleteManyArgs>(args?: SelectSubset<T, aulasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aulas = await prisma.aulas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aulasUpdateManyArgs>(args: SelectSubset<T, aulasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aulas.
     * @param {aulasUpsertArgs} args - Arguments to update or create a Aulas.
     * @example
     * // Update or create a Aulas
     * const aulas = await prisma.aulas.upsert({
     *   create: {
     *     // ... data to create a Aulas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aulas we want to update
     *   }
     * })
     */
    upsert<T extends aulasUpsertArgs>(args: SelectSubset<T, aulasUpsertArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aulas.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends aulasCountArgs>(
      args?: Subset<T, aulasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulasAggregateArgs>(args: Subset<T, AulasAggregateArgs>): Prisma.PrismaPromise<GetAulasAggregateType<T>>

    /**
     * Group by Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasGroupByArgs} args - Group by arguments.
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
      T extends aulasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aulasGroupByArgs['orderBy'] }
        : { orderBy?: aulasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aulasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aulas model
   */
  readonly fields: aulasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aulas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aulasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mov_asig_au<T extends aulas$mov_asig_auArgs<ExtArgs> = {}>(args?: Subset<T, aulas$mov_asig_auArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the aulas model
   */
  interface aulasFieldRefs {
    readonly pk_aula: FieldRef<"aulas", 'Int'>
    readonly nombre_aula: FieldRef<"aulas", 'String'>
    readonly capacidad: FieldRef<"aulas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * aulas findUnique
   */
  export type aulasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where: aulasWhereUniqueInput
  }

  /**
   * aulas findUniqueOrThrow
   */
  export type aulasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where: aulasWhereUniqueInput
  }

  /**
   * aulas findFirst
   */
  export type aulasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aulas.
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aulas.
     */
    distinct?: AulasScalarFieldEnum | AulasScalarFieldEnum[]
  }

  /**
   * aulas findFirstOrThrow
   */
  export type aulasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aulas.
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aulas.
     */
    distinct?: AulasScalarFieldEnum | AulasScalarFieldEnum[]
  }

  /**
   * aulas findMany
   */
  export type aulasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aulas.
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    distinct?: AulasScalarFieldEnum | AulasScalarFieldEnum[]
  }

  /**
   * aulas create
   */
  export type aulasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * The data needed to create a aulas.
     */
    data?: XOR<aulasCreateInput, aulasUncheckedCreateInput>
  }

  /**
   * aulas createMany
   */
  export type aulasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aulas.
     */
    data: aulasCreateManyInput | aulasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aulas update
   */
  export type aulasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * The data needed to update a aulas.
     */
    data: XOR<aulasUpdateInput, aulasUncheckedUpdateInput>
    /**
     * Choose, which aulas to update.
     */
    where: aulasWhereUniqueInput
  }

  /**
   * aulas updateMany
   */
  export type aulasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aulas.
     */
    data: XOR<aulasUpdateManyMutationInput, aulasUncheckedUpdateManyInput>
    /**
     * Filter which aulas to update
     */
    where?: aulasWhereInput
    /**
     * Limit how many aulas to update.
     */
    limit?: number
  }

  /**
   * aulas upsert
   */
  export type aulasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * The filter to search for the aulas to update in case it exists.
     */
    where: aulasWhereUniqueInput
    /**
     * In case the aulas found by the `where` argument doesn't exist, create a new aulas with this data.
     */
    create: XOR<aulasCreateInput, aulasUncheckedCreateInput>
    /**
     * In case the aulas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aulasUpdateInput, aulasUncheckedUpdateInput>
  }

  /**
   * aulas delete
   */
  export type aulasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    /**
     * Filter which aulas to delete.
     */
    where: aulasWhereUniqueInput
  }

  /**
   * aulas deleteMany
   */
  export type aulasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aulas to delete
     */
    where?: aulasWhereInput
    /**
     * Limit how many aulas to delete.
     */
    limit?: number
  }

  /**
   * aulas.mov_asig_au
   */
  export type aulas$mov_asig_auArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    where?: mov_asig_auWhereInput
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    cursor?: mov_asig_auWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mov_asig_auScalarFieldEnum | Mov_asig_auScalarFieldEnum[]
  }

  /**
   * aulas without action
   */
  export type aulasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
  }


  /**
   * Model cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    pk_cargo: number | null
  }

  export type CargoSumAggregateOutputType = {
    pk_cargo: number | null
  }

  export type CargoMinAggregateOutputType = {
    pk_cargo: number | null
    nombre_cargo: string | null
  }

  export type CargoMaxAggregateOutputType = {
    pk_cargo: number | null
    nombre_cargo: string | null
  }

  export type CargoCountAggregateOutputType = {
    pk_cargo: number
    nombre_cargo: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    pk_cargo?: true
  }

  export type CargoSumAggregateInputType = {
    pk_cargo?: true
  }

  export type CargoMinAggregateInputType = {
    pk_cargo?: true
    nombre_cargo?: true
  }

  export type CargoMaxAggregateInputType = {
    pk_cargo?: true
    nombre_cargo?: true
  }

  export type CargoCountAggregateInputType = {
    pk_cargo?: true
    nombre_cargo?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cargo to aggregate.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type cargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cargoWhereInput
    orderBy?: cargoOrderByWithAggregationInput | cargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: cargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    pk_cargo: number
    nombre_cargo: string | null
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends cargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type cargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_cargo?: boolean
    nombre_cargo?: boolean
  }, ExtArgs["result"]["cargo"]>



  export type cargoSelectScalar = {
    pk_cargo?: boolean
    nombre_cargo?: boolean
  }

  export type cargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_cargo" | "nombre_cargo", ExtArgs["result"]["cargo"]>

  export type $cargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cargo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk_cargo: number
      nombre_cargo: string | null
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type cargoGetPayload<S extends boolean | null | undefined | cargoDefaultArgs> = $Result.GetResult<Prisma.$cargoPayload, S>

  type cargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface cargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cargo'], meta: { name: 'cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {cargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cargoFindUniqueArgs>(args: SelectSubset<T, cargoFindUniqueArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cargoFindUniqueOrThrowArgs>(args: SelectSubset<T, cargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cargoFindFirstArgs>(args?: SelectSubset<T, cargoFindFirstArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cargoFindFirstOrThrowArgs>(args?: SelectSubset<T, cargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `pk_cargo`
     * const cargoWithPk_cargoOnly = await prisma.cargo.findMany({ select: { pk_cargo: true } })
     * 
     */
    findMany<T extends cargoFindManyArgs>(args?: SelectSubset<T, cargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {cargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends cargoCreateArgs>(args: SelectSubset<T, cargoCreateArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {cargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cargoCreateManyArgs>(args?: SelectSubset<T, cargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cargo.
     * @param {cargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends cargoDeleteArgs>(args: SelectSubset<T, cargoDeleteArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {cargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cargoUpdateArgs>(args: SelectSubset<T, cargoUpdateArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {cargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cargoDeleteManyArgs>(args?: SelectSubset<T, cargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cargoUpdateManyArgs>(args: SelectSubset<T, cargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cargo.
     * @param {cargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends cargoUpsertArgs>(args: SelectSubset<T, cargoUpsertArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends cargoCountArgs>(
      args?: Subset<T, cargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoGroupByArgs} args - Group by arguments.
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
      T extends cargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cargoGroupByArgs['orderBy'] }
        : { orderBy?: cargoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cargo model
   */
  readonly fields: cargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the cargo model
   */
  interface cargoFieldRefs {
    readonly pk_cargo: FieldRef<"cargo", 'Int'>
    readonly nombre_cargo: FieldRef<"cargo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cargo findUnique
   */
  export type cargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo findUniqueOrThrow
   */
  export type cargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo findFirst
   */
  export type cargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo findFirstOrThrow
   */
  export type cargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo findMany
   */
  export type cargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter, which cargos to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo create
   */
  export type cargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The data needed to create a cargo.
     */
    data?: XOR<cargoCreateInput, cargoUncheckedCreateInput>
  }

  /**
   * cargo createMany
   */
  export type cargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cargos.
     */
    data: cargoCreateManyInput | cargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cargo update
   */
  export type cargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The data needed to update a cargo.
     */
    data: XOR<cargoUpdateInput, cargoUncheckedUpdateInput>
    /**
     * Choose, which cargo to update.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo updateMany
   */
  export type cargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cargos.
     */
    data: XOR<cargoUpdateManyMutationInput, cargoUncheckedUpdateManyInput>
    /**
     * Filter which cargos to update
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to update.
     */
    limit?: number
  }

  /**
   * cargo upsert
   */
  export type cargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The filter to search for the cargo to update in case it exists.
     */
    where: cargoWhereUniqueInput
    /**
     * In case the cargo found by the `where` argument doesn't exist, create a new cargo with this data.
     */
    create: XOR<cargoCreateInput, cargoUncheckedCreateInput>
    /**
     * In case the cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cargoUpdateInput, cargoUncheckedUpdateInput>
  }

  /**
   * cargo delete
   */
  export type cargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Filter which cargo to delete.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo deleteMany
   */
  export type cargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cargos to delete
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to delete.
     */
    limit?: number
  }

  /**
   * cargo without action
   */
  export type cargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
  }


  /**
   * Model cia
   */

  export type AggregateCia = {
    _count: CiaCountAggregateOutputType | null
    _avg: CiaAvgAggregateOutputType | null
    _sum: CiaSumAggregateOutputType | null
    _min: CiaMinAggregateOutputType | null
    _max: CiaMaxAggregateOutputType | null
  }

  export type CiaAvgAggregateOutputType = {
    pk_cia: number | null
  }

  export type CiaSumAggregateOutputType = {
    pk_cia: number | null
  }

  export type CiaMinAggregateOutputType = {
    pk_cia: number | null
    nombre_cia: string | null
    direccion: string | null
    telefono: string | null
  }

  export type CiaMaxAggregateOutputType = {
    pk_cia: number | null
    nombre_cia: string | null
    direccion: string | null
    telefono: string | null
  }

  export type CiaCountAggregateOutputType = {
    pk_cia: number
    nombre_cia: number
    direccion: number
    telefono: number
    _all: number
  }


  export type CiaAvgAggregateInputType = {
    pk_cia?: true
  }

  export type CiaSumAggregateInputType = {
    pk_cia?: true
  }

  export type CiaMinAggregateInputType = {
    pk_cia?: true
    nombre_cia?: true
    direccion?: true
    telefono?: true
  }

  export type CiaMaxAggregateInputType = {
    pk_cia?: true
    nombre_cia?: true
    direccion?: true
    telefono?: true
  }

  export type CiaCountAggregateInputType = {
    pk_cia?: true
    nombre_cia?: true
    direccion?: true
    telefono?: true
    _all?: true
  }

  export type CiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cia to aggregate.
     */
    where?: ciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cias to fetch.
     */
    orderBy?: ciaOrderByWithRelationInput | ciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cias
    **/
    _count?: true | CiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiaMaxAggregateInputType
  }

  export type GetCiaAggregateType<T extends CiaAggregateArgs> = {
        [P in keyof T & keyof AggregateCia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCia[P]>
      : GetScalarType<T[P], AggregateCia[P]>
  }




  export type ciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ciaWhereInput
    orderBy?: ciaOrderByWithAggregationInput | ciaOrderByWithAggregationInput[]
    by: CiaScalarFieldEnum[] | CiaScalarFieldEnum
    having?: ciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiaCountAggregateInputType | true
    _avg?: CiaAvgAggregateInputType
    _sum?: CiaSumAggregateInputType
    _min?: CiaMinAggregateInputType
    _max?: CiaMaxAggregateInputType
  }

  export type CiaGroupByOutputType = {
    pk_cia: number
    nombre_cia: string | null
    direccion: string | null
    telefono: string | null
    _count: CiaCountAggregateOutputType | null
    _avg: CiaAvgAggregateOutputType | null
    _sum: CiaSumAggregateOutputType | null
    _min: CiaMinAggregateOutputType | null
    _max: CiaMaxAggregateOutputType | null
  }

  type GetCiaGroupByPayload<T extends ciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiaGroupByOutputType[P]>
            : GetScalarType<T[P], CiaGroupByOutputType[P]>
        }
      >
    >


  export type ciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_cia?: boolean
    nombre_cia?: boolean
    direccion?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["cia"]>



  export type ciaSelectScalar = {
    pk_cia?: boolean
    nombre_cia?: boolean
    direccion?: boolean
    telefono?: boolean
  }

  export type ciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_cia" | "nombre_cia" | "direccion" | "telefono", ExtArgs["result"]["cia"]>

  export type $ciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk_cia: number
      nombre_cia: string | null
      direccion: string | null
      telefono: string | null
    }, ExtArgs["result"]["cia"]>
    composites: {}
  }

  type ciaGetPayload<S extends boolean | null | undefined | ciaDefaultArgs> = $Result.GetResult<Prisma.$ciaPayload, S>

  type ciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiaCountAggregateInputType | true
    }

  export interface ciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cia'], meta: { name: 'cia' } }
    /**
     * Find zero or one Cia that matches the filter.
     * @param {ciaFindUniqueArgs} args - Arguments to find a Cia
     * @example
     * // Get one Cia
     * const cia = await prisma.cia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ciaFindUniqueArgs>(args: SelectSubset<T, ciaFindUniqueArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ciaFindUniqueOrThrowArgs} args - Arguments to find a Cia
     * @example
     * // Get one Cia
     * const cia = await prisma.cia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ciaFindUniqueOrThrowArgs>(args: SelectSubset<T, ciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciaFindFirstArgs} args - Arguments to find a Cia
     * @example
     * // Get one Cia
     * const cia = await prisma.cia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ciaFindFirstArgs>(args?: SelectSubset<T, ciaFindFirstArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciaFindFirstOrThrowArgs} args - Arguments to find a Cia
     * @example
     * // Get one Cia
     * const cia = await prisma.cia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ciaFindFirstOrThrowArgs>(args?: SelectSubset<T, ciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cias
     * const cias = await prisma.cia.findMany()
     * 
     * // Get first 10 Cias
     * const cias = await prisma.cia.findMany({ take: 10 })
     * 
     * // Only select the `pk_cia`
     * const ciaWithPk_ciaOnly = await prisma.cia.findMany({ select: { pk_cia: true } })
     * 
     */
    findMany<T extends ciaFindManyArgs>(args?: SelectSubset<T, ciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cia.
     * @param {ciaCreateArgs} args - Arguments to create a Cia.
     * @example
     * // Create one Cia
     * const Cia = await prisma.cia.create({
     *   data: {
     *     // ... data to create a Cia
     *   }
     * })
     * 
     */
    create<T extends ciaCreateArgs>(args: SelectSubset<T, ciaCreateArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cias.
     * @param {ciaCreateManyArgs} args - Arguments to create many Cias.
     * @example
     * // Create many Cias
     * const cia = await prisma.cia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ciaCreateManyArgs>(args?: SelectSubset<T, ciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cia.
     * @param {ciaDeleteArgs} args - Arguments to delete one Cia.
     * @example
     * // Delete one Cia
     * const Cia = await prisma.cia.delete({
     *   where: {
     *     // ... filter to delete one Cia
     *   }
     * })
     * 
     */
    delete<T extends ciaDeleteArgs>(args: SelectSubset<T, ciaDeleteArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cia.
     * @param {ciaUpdateArgs} args - Arguments to update one Cia.
     * @example
     * // Update one Cia
     * const cia = await prisma.cia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ciaUpdateArgs>(args: SelectSubset<T, ciaUpdateArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cias.
     * @param {ciaDeleteManyArgs} args - Arguments to filter Cias to delete.
     * @example
     * // Delete a few Cias
     * const { count } = await prisma.cia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ciaDeleteManyArgs>(args?: SelectSubset<T, ciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cias
     * const cia = await prisma.cia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ciaUpdateManyArgs>(args: SelectSubset<T, ciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cia.
     * @param {ciaUpsertArgs} args - Arguments to update or create a Cia.
     * @example
     * // Update or create a Cia
     * const cia = await prisma.cia.upsert({
     *   create: {
     *     // ... data to create a Cia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cia we want to update
     *   }
     * })
     */
    upsert<T extends ciaUpsertArgs>(args: SelectSubset<T, ciaUpsertArgs<ExtArgs>>): Prisma__ciaClient<$Result.GetResult<Prisma.$ciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciaCountArgs} args - Arguments to filter Cias to count.
     * @example
     * // Count the number of Cias
     * const count = await prisma.cia.count({
     *   where: {
     *     // ... the filter for the Cias we want to count
     *   }
     * })
    **/
    count<T extends ciaCountArgs>(
      args?: Subset<T, ciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CiaAggregateArgs>(args: Subset<T, CiaAggregateArgs>): Prisma.PrismaPromise<GetCiaAggregateType<T>>

    /**
     * Group by Cia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciaGroupByArgs} args - Group by arguments.
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
      T extends ciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ciaGroupByArgs['orderBy'] }
        : { orderBy?: ciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cia model
   */
  readonly fields: ciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the cia model
   */
  interface ciaFieldRefs {
    readonly pk_cia: FieldRef<"cia", 'Int'>
    readonly nombre_cia: FieldRef<"cia", 'String'>
    readonly direccion: FieldRef<"cia", 'String'>
    readonly telefono: FieldRef<"cia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cia findUnique
   */
  export type ciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * Filter, which cia to fetch.
     */
    where: ciaWhereUniqueInput
  }

  /**
   * cia findUniqueOrThrow
   */
  export type ciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * Filter, which cia to fetch.
     */
    where: ciaWhereUniqueInput
  }

  /**
   * cia findFirst
   */
  export type ciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * Filter, which cia to fetch.
     */
    where?: ciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cias to fetch.
     */
    orderBy?: ciaOrderByWithRelationInput | ciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cias.
     */
    cursor?: ciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cias.
     */
    distinct?: CiaScalarFieldEnum | CiaScalarFieldEnum[]
  }

  /**
   * cia findFirstOrThrow
   */
  export type ciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * Filter, which cia to fetch.
     */
    where?: ciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cias to fetch.
     */
    orderBy?: ciaOrderByWithRelationInput | ciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cias.
     */
    cursor?: ciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cias.
     */
    distinct?: CiaScalarFieldEnum | CiaScalarFieldEnum[]
  }

  /**
   * cia findMany
   */
  export type ciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * Filter, which cias to fetch.
     */
    where?: ciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cias to fetch.
     */
    orderBy?: ciaOrderByWithRelationInput | ciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cias.
     */
    cursor?: ciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cias.
     */
    skip?: number
    distinct?: CiaScalarFieldEnum | CiaScalarFieldEnum[]
  }

  /**
   * cia create
   */
  export type ciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * The data needed to create a cia.
     */
    data?: XOR<ciaCreateInput, ciaUncheckedCreateInput>
  }

  /**
   * cia createMany
   */
  export type ciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cias.
     */
    data: ciaCreateManyInput | ciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cia update
   */
  export type ciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * The data needed to update a cia.
     */
    data: XOR<ciaUpdateInput, ciaUncheckedUpdateInput>
    /**
     * Choose, which cia to update.
     */
    where: ciaWhereUniqueInput
  }

  /**
   * cia updateMany
   */
  export type ciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cias.
     */
    data: XOR<ciaUpdateManyMutationInput, ciaUncheckedUpdateManyInput>
    /**
     * Filter which cias to update
     */
    where?: ciaWhereInput
    /**
     * Limit how many cias to update.
     */
    limit?: number
  }

  /**
   * cia upsert
   */
  export type ciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * The filter to search for the cia to update in case it exists.
     */
    where: ciaWhereUniqueInput
    /**
     * In case the cia found by the `where` argument doesn't exist, create a new cia with this data.
     */
    create: XOR<ciaCreateInput, ciaUncheckedCreateInput>
    /**
     * In case the cia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ciaUpdateInput, ciaUncheckedUpdateInput>
  }

  /**
   * cia delete
   */
  export type ciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
    /**
     * Filter which cia to delete.
     */
    where: ciaWhereUniqueInput
  }

  /**
   * cia deleteMany
   */
  export type ciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cias to delete
     */
    where?: ciaWhereInput
    /**
     * Limit how many cias to delete.
     */
    limit?: number
  }

  /**
   * cia without action
   */
  export type ciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cia
     */
    select?: ciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cia
     */
    omit?: ciaOmit<ExtArgs> | null
  }


  /**
   * Model civil
   */

  export type AggregateCivil = {
    _count: CivilCountAggregateOutputType | null
    _avg: CivilAvgAggregateOutputType | null
    _sum: CivilSumAggregateOutputType | null
    _min: CivilMinAggregateOutputType | null
    _max: CivilMaxAggregateOutputType | null
  }

  export type CivilAvgAggregateOutputType = {
    pk_id_civil: number | null
    fk_id_estado: number | null
  }

  export type CivilSumAggregateOutputType = {
    pk_id_civil: number | null
    fk_id_estado: number | null
  }

  export type CivilMinAggregateOutputType = {
    pk_id_civil: number | null
    nombre_civil: string | null
    fk_id_estado: number | null
  }

  export type CivilMaxAggregateOutputType = {
    pk_id_civil: number | null
    nombre_civil: string | null
    fk_id_estado: number | null
  }

  export type CivilCountAggregateOutputType = {
    pk_id_civil: number
    nombre_civil: number
    fk_id_estado: number
    _all: number
  }


  export type CivilAvgAggregateInputType = {
    pk_id_civil?: true
    fk_id_estado?: true
  }

  export type CivilSumAggregateInputType = {
    pk_id_civil?: true
    fk_id_estado?: true
  }

  export type CivilMinAggregateInputType = {
    pk_id_civil?: true
    nombre_civil?: true
    fk_id_estado?: true
  }

  export type CivilMaxAggregateInputType = {
    pk_id_civil?: true
    nombre_civil?: true
    fk_id_estado?: true
  }

  export type CivilCountAggregateInputType = {
    pk_id_civil?: true
    nombre_civil?: true
    fk_id_estado?: true
    _all?: true
  }

  export type CivilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which civil to aggregate.
     */
    where?: civilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of civils to fetch.
     */
    orderBy?: civilOrderByWithRelationInput | civilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: civilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` civils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` civils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned civils
    **/
    _count?: true | CivilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CivilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CivilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CivilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CivilMaxAggregateInputType
  }

  export type GetCivilAggregateType<T extends CivilAggregateArgs> = {
        [P in keyof T & keyof AggregateCivil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCivil[P]>
      : GetScalarType<T[P], AggregateCivil[P]>
  }




  export type civilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: civilWhereInput
    orderBy?: civilOrderByWithAggregationInput | civilOrderByWithAggregationInput[]
    by: CivilScalarFieldEnum[] | CivilScalarFieldEnum
    having?: civilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CivilCountAggregateInputType | true
    _avg?: CivilAvgAggregateInputType
    _sum?: CivilSumAggregateInputType
    _min?: CivilMinAggregateInputType
    _max?: CivilMaxAggregateInputType
  }

  export type CivilGroupByOutputType = {
    pk_id_civil: number
    nombre_civil: string | null
    fk_id_estado: number | null
    _count: CivilCountAggregateOutputType | null
    _avg: CivilAvgAggregateOutputType | null
    _sum: CivilSumAggregateOutputType | null
    _min: CivilMinAggregateOutputType | null
    _max: CivilMaxAggregateOutputType | null
  }

  type GetCivilGroupByPayload<T extends civilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CivilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CivilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CivilGroupByOutputType[P]>
            : GetScalarType<T[P], CivilGroupByOutputType[P]>
        }
      >
    >


  export type civilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_civil?: boolean
    nombre_civil?: boolean
    fk_id_estado?: boolean
    estado?: boolean | civil$estadoArgs<ExtArgs>
    datos?: boolean | civil$datosArgs<ExtArgs>
    _count?: boolean | CivilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["civil"]>



  export type civilSelectScalar = {
    pk_id_civil?: boolean
    nombre_civil?: boolean
    fk_id_estado?: boolean
  }

  export type civilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_id_civil" | "nombre_civil" | "fk_id_estado", ExtArgs["result"]["civil"]>
  export type civilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | civil$estadoArgs<ExtArgs>
    datos?: boolean | civil$datosArgs<ExtArgs>
    _count?: boolean | CivilCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $civilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "civil"
    objects: {
      estado: Prisma.$estadoPayload<ExtArgs> | null
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_civil: number
      nombre_civil: string | null
      fk_id_estado: number | null
    }, ExtArgs["result"]["civil"]>
    composites: {}
  }

  type civilGetPayload<S extends boolean | null | undefined | civilDefaultArgs> = $Result.GetResult<Prisma.$civilPayload, S>

  type civilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<civilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CivilCountAggregateInputType | true
    }

  export interface civilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['civil'], meta: { name: 'civil' } }
    /**
     * Find zero or one Civil that matches the filter.
     * @param {civilFindUniqueArgs} args - Arguments to find a Civil
     * @example
     * // Get one Civil
     * const civil = await prisma.civil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends civilFindUniqueArgs>(args: SelectSubset<T, civilFindUniqueArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Civil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {civilFindUniqueOrThrowArgs} args - Arguments to find a Civil
     * @example
     * // Get one Civil
     * const civil = await prisma.civil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends civilFindUniqueOrThrowArgs>(args: SelectSubset<T, civilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Civil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {civilFindFirstArgs} args - Arguments to find a Civil
     * @example
     * // Get one Civil
     * const civil = await prisma.civil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends civilFindFirstArgs>(args?: SelectSubset<T, civilFindFirstArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Civil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {civilFindFirstOrThrowArgs} args - Arguments to find a Civil
     * @example
     * // Get one Civil
     * const civil = await prisma.civil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends civilFindFirstOrThrowArgs>(args?: SelectSubset<T, civilFindFirstOrThrowArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Civils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {civilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Civils
     * const civils = await prisma.civil.findMany()
     * 
     * // Get first 10 Civils
     * const civils = await prisma.civil.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_civil`
     * const civilWithPk_id_civilOnly = await prisma.civil.findMany({ select: { pk_id_civil: true } })
     * 
     */
    findMany<T extends civilFindManyArgs>(args?: SelectSubset<T, civilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Civil.
     * @param {civilCreateArgs} args - Arguments to create a Civil.
     * @example
     * // Create one Civil
     * const Civil = await prisma.civil.create({
     *   data: {
     *     // ... data to create a Civil
     *   }
     * })
     * 
     */
    create<T extends civilCreateArgs>(args: SelectSubset<T, civilCreateArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Civils.
     * @param {civilCreateManyArgs} args - Arguments to create many Civils.
     * @example
     * // Create many Civils
     * const civil = await prisma.civil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends civilCreateManyArgs>(args?: SelectSubset<T, civilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Civil.
     * @param {civilDeleteArgs} args - Arguments to delete one Civil.
     * @example
     * // Delete one Civil
     * const Civil = await prisma.civil.delete({
     *   where: {
     *     // ... filter to delete one Civil
     *   }
     * })
     * 
     */
    delete<T extends civilDeleteArgs>(args: SelectSubset<T, civilDeleteArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Civil.
     * @param {civilUpdateArgs} args - Arguments to update one Civil.
     * @example
     * // Update one Civil
     * const civil = await prisma.civil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends civilUpdateArgs>(args: SelectSubset<T, civilUpdateArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Civils.
     * @param {civilDeleteManyArgs} args - Arguments to filter Civils to delete.
     * @example
     * // Delete a few Civils
     * const { count } = await prisma.civil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends civilDeleteManyArgs>(args?: SelectSubset<T, civilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Civils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {civilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Civils
     * const civil = await prisma.civil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends civilUpdateManyArgs>(args: SelectSubset<T, civilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Civil.
     * @param {civilUpsertArgs} args - Arguments to update or create a Civil.
     * @example
     * // Update or create a Civil
     * const civil = await prisma.civil.upsert({
     *   create: {
     *     // ... data to create a Civil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Civil we want to update
     *   }
     * })
     */
    upsert<T extends civilUpsertArgs>(args: SelectSubset<T, civilUpsertArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Civils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {civilCountArgs} args - Arguments to filter Civils to count.
     * @example
     * // Count the number of Civils
     * const count = await prisma.civil.count({
     *   where: {
     *     // ... the filter for the Civils we want to count
     *   }
     * })
    **/
    count<T extends civilCountArgs>(
      args?: Subset<T, civilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CivilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Civil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CivilAggregateArgs>(args: Subset<T, CivilAggregateArgs>): Prisma.PrismaPromise<GetCivilAggregateType<T>>

    /**
     * Group by Civil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {civilGroupByArgs} args - Group by arguments.
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
      T extends civilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: civilGroupByArgs['orderBy'] }
        : { orderBy?: civilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, civilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCivilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the civil model
   */
  readonly fields: civilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for civil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__civilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado<T extends civil$estadoArgs<ExtArgs> = {}>(args?: Subset<T, civil$estadoArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    datos<T extends civil$datosArgs<ExtArgs> = {}>(args?: Subset<T, civil$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the civil model
   */
  interface civilFieldRefs {
    readonly pk_id_civil: FieldRef<"civil", 'Int'>
    readonly nombre_civil: FieldRef<"civil", 'String'>
    readonly fk_id_estado: FieldRef<"civil", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * civil findUnique
   */
  export type civilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * Filter, which civil to fetch.
     */
    where: civilWhereUniqueInput
  }

  /**
   * civil findUniqueOrThrow
   */
  export type civilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * Filter, which civil to fetch.
     */
    where: civilWhereUniqueInput
  }

  /**
   * civil findFirst
   */
  export type civilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * Filter, which civil to fetch.
     */
    where?: civilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of civils to fetch.
     */
    orderBy?: civilOrderByWithRelationInput | civilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for civils.
     */
    cursor?: civilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` civils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` civils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of civils.
     */
    distinct?: CivilScalarFieldEnum | CivilScalarFieldEnum[]
  }

  /**
   * civil findFirstOrThrow
   */
  export type civilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * Filter, which civil to fetch.
     */
    where?: civilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of civils to fetch.
     */
    orderBy?: civilOrderByWithRelationInput | civilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for civils.
     */
    cursor?: civilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` civils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` civils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of civils.
     */
    distinct?: CivilScalarFieldEnum | CivilScalarFieldEnum[]
  }

  /**
   * civil findMany
   */
  export type civilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * Filter, which civils to fetch.
     */
    where?: civilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of civils to fetch.
     */
    orderBy?: civilOrderByWithRelationInput | civilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing civils.
     */
    cursor?: civilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` civils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` civils.
     */
    skip?: number
    distinct?: CivilScalarFieldEnum | CivilScalarFieldEnum[]
  }

  /**
   * civil create
   */
  export type civilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * The data needed to create a civil.
     */
    data: XOR<civilCreateInput, civilUncheckedCreateInput>
  }

  /**
   * civil createMany
   */
  export type civilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many civils.
     */
    data: civilCreateManyInput | civilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * civil update
   */
  export type civilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * The data needed to update a civil.
     */
    data: XOR<civilUpdateInput, civilUncheckedUpdateInput>
    /**
     * Choose, which civil to update.
     */
    where: civilWhereUniqueInput
  }

  /**
   * civil updateMany
   */
  export type civilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update civils.
     */
    data: XOR<civilUpdateManyMutationInput, civilUncheckedUpdateManyInput>
    /**
     * Filter which civils to update
     */
    where?: civilWhereInput
    /**
     * Limit how many civils to update.
     */
    limit?: number
  }

  /**
   * civil upsert
   */
  export type civilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * The filter to search for the civil to update in case it exists.
     */
    where: civilWhereUniqueInput
    /**
     * In case the civil found by the `where` argument doesn't exist, create a new civil with this data.
     */
    create: XOR<civilCreateInput, civilUncheckedCreateInput>
    /**
     * In case the civil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<civilUpdateInput, civilUncheckedUpdateInput>
  }

  /**
   * civil delete
   */
  export type civilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    /**
     * Filter which civil to delete.
     */
    where: civilWhereUniqueInput
  }

  /**
   * civil deleteMany
   */
  export type civilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which civils to delete
     */
    where?: civilWhereInput
    /**
     * Limit how many civils to delete.
     */
    limit?: number
  }

  /**
   * civil.estado
   */
  export type civil$estadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    where?: estadoWhereInput
  }

  /**
   * civil.datos
   */
  export type civil$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * civil without action
   */
  export type civilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
  }


  /**
   * Model datos
   */

  export type AggregateDatos = {
    _count: DatosCountAggregateOutputType | null
    _avg: DatosAvgAggregateOutputType | null
    _sum: DatosSumAggregateOutputType | null
    _min: DatosMinAggregateOutputType | null
    _max: DatosMaxAggregateOutputType | null
  }

  export type DatosAvgAggregateOutputType = {
    pk_dato: number | null
    fk_id_doc: number | null
    fk_id_civil: number | null
    fk_id_gene: number | null
    fk_pregrado: number | null
    fk_id_semestre: number | null
    fk_id_tipo_status: number | null
  }

  export type DatosSumAggregateOutputType = {
    pk_dato: number | null
    fk_id_doc: number | null
    fk_id_civil: number | null
    fk_id_gene: number | null
    fk_pregrado: number | null
    fk_id_semestre: number | null
    fk_id_tipo_status: number | null
  }

  export type DatosMinAggregateOutputType = {
    pk_dato: number | null
    nombre: string | null
    apellido: string | null
    fk_id_doc: number | null
    fk_id_civil: number | null
    fk_id_gene: number | null
    correo: string | null
    telefono: string | null
    fk_pregrado: number | null
    fk_id_semestre: number | null
    fk_id_tipo_status: number | null
    asignatura: string | null
    salon: string | null
    dia: string | null
    hora_inicio: string | null
    hora_fin: string | null
  }

  export type DatosMaxAggregateOutputType = {
    pk_dato: number | null
    nombre: string | null
    apellido: string | null
    fk_id_doc: number | null
    fk_id_civil: number | null
    fk_id_gene: number | null
    correo: string | null
    telefono: string | null
    fk_pregrado: number | null
    fk_id_semestre: number | null
    fk_id_tipo_status: number | null
    asignatura: string | null
    salon: string | null
    dia: string | null
    hora_inicio: string | null
    hora_fin: string | null
  }

  export type DatosCountAggregateOutputType = {
    pk_dato: number
    nombre: number
    apellido: number
    fk_id_doc: number
    fk_id_civil: number
    fk_id_gene: number
    correo: number
    telefono: number
    fk_pregrado: number
    fk_id_semestre: number
    fk_id_tipo_status: number
    asignatura: number
    salon: number
    dia: number
    hora_inicio: number
    hora_fin: number
    _all: number
  }


  export type DatosAvgAggregateInputType = {
    pk_dato?: true
    fk_id_doc?: true
    fk_id_civil?: true
    fk_id_gene?: true
    fk_pregrado?: true
    fk_id_semestre?: true
    fk_id_tipo_status?: true
  }

  export type DatosSumAggregateInputType = {
    pk_dato?: true
    fk_id_doc?: true
    fk_id_civil?: true
    fk_id_gene?: true
    fk_pregrado?: true
    fk_id_semestre?: true
    fk_id_tipo_status?: true
  }

  export type DatosMinAggregateInputType = {
    pk_dato?: true
    nombre?: true
    apellido?: true
    fk_id_doc?: true
    fk_id_civil?: true
    fk_id_gene?: true
    correo?: true
    telefono?: true
    fk_pregrado?: true
    fk_id_semestre?: true
    fk_id_tipo_status?: true
    asignatura?: true
    salon?: true
    dia?: true
    hora_inicio?: true
    hora_fin?: true
  }

  export type DatosMaxAggregateInputType = {
    pk_dato?: true
    nombre?: true
    apellido?: true
    fk_id_doc?: true
    fk_id_civil?: true
    fk_id_gene?: true
    correo?: true
    telefono?: true
    fk_pregrado?: true
    fk_id_semestre?: true
    fk_id_tipo_status?: true
    asignatura?: true
    salon?: true
    dia?: true
    hora_inicio?: true
    hora_fin?: true
  }

  export type DatosCountAggregateInputType = {
    pk_dato?: true
    nombre?: true
    apellido?: true
    fk_id_doc?: true
    fk_id_civil?: true
    fk_id_gene?: true
    correo?: true
    telefono?: true
    fk_pregrado?: true
    fk_id_semestre?: true
    fk_id_tipo_status?: true
    asignatura?: true
    salon?: true
    dia?: true
    hora_inicio?: true
    hora_fin?: true
    _all?: true
  }

  export type DatosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos to aggregate.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datos
    **/
    _count?: true | DatosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatosMaxAggregateInputType
  }

  export type GetDatosAggregateType<T extends DatosAggregateArgs> = {
        [P in keyof T & keyof AggregateDatos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatos[P]>
      : GetScalarType<T[P], AggregateDatos[P]>
  }




  export type datosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datosWhereInput
    orderBy?: datosOrderByWithAggregationInput | datosOrderByWithAggregationInput[]
    by: DatosScalarFieldEnum[] | DatosScalarFieldEnum
    having?: datosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatosCountAggregateInputType | true
    _avg?: DatosAvgAggregateInputType
    _sum?: DatosSumAggregateInputType
    _min?: DatosMinAggregateInputType
    _max?: DatosMaxAggregateInputType
  }

  export type DatosGroupByOutputType = {
    pk_dato: number
    nombre: string | null
    apellido: string | null
    fk_id_doc: number | null
    fk_id_civil: number | null
    fk_id_gene: number | null
    correo: string | null
    telefono: string | null
    fk_pregrado: number | null
    fk_id_semestre: number | null
    fk_id_tipo_status: number | null
    asignatura: string | null
    salon: string | null
    dia: string | null
    hora_inicio: string | null
    hora_fin: string | null
    _count: DatosCountAggregateOutputType | null
    _avg: DatosAvgAggregateOutputType | null
    _sum: DatosSumAggregateOutputType | null
    _min: DatosMinAggregateOutputType | null
    _max: DatosMaxAggregateOutputType | null
  }

  type GetDatosGroupByPayload<T extends datosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatosGroupByOutputType[P]>
            : GetScalarType<T[P], DatosGroupByOutputType[P]>
        }
      >
    >


  export type datosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_dato?: boolean
    nombre?: boolean
    apellido?: boolean
    fk_id_doc?: boolean
    fk_id_civil?: boolean
    fk_id_gene?: boolean
    correo?: boolean
    telefono?: boolean
    fk_pregrado?: boolean
    fk_id_semestre?: boolean
    fk_id_tipo_status?: boolean
    asignatura?: boolean
    salon?: boolean
    dia?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    documento?: boolean | datos$documentoArgs<ExtArgs>
    civil?: boolean | datos$civilArgs<ExtArgs>
    genero?: boolean | datos$generoArgs<ExtArgs>
    pregrado?: boolean | datos$pregradoArgs<ExtArgs>
    semestre?: boolean | datos$semestreArgs<ExtArgs>
    tipo_status?: boolean | datos$tipo_statusArgs<ExtArgs>
  }, ExtArgs["result"]["datos"]>



  export type datosSelectScalar = {
    pk_dato?: boolean
    nombre?: boolean
    apellido?: boolean
    fk_id_doc?: boolean
    fk_id_civil?: boolean
    fk_id_gene?: boolean
    correo?: boolean
    telefono?: boolean
    fk_pregrado?: boolean
    fk_id_semestre?: boolean
    fk_id_tipo_status?: boolean
    asignatura?: boolean
    salon?: boolean
    dia?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
  }

  export type datosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_dato" | "nombre" | "apellido" | "fk_id_doc" | "fk_id_civil" | "fk_id_gene" | "correo" | "telefono" | "fk_pregrado" | "fk_id_semestre" | "fk_id_tipo_status" | "asignatura" | "salon" | "dia" | "hora_inicio" | "hora_fin", ExtArgs["result"]["datos"]>
  export type datosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documento?: boolean | datos$documentoArgs<ExtArgs>
    civil?: boolean | datos$civilArgs<ExtArgs>
    genero?: boolean | datos$generoArgs<ExtArgs>
    pregrado?: boolean | datos$pregradoArgs<ExtArgs>
    semestre?: boolean | datos$semestreArgs<ExtArgs>
    tipo_status?: boolean | datos$tipo_statusArgs<ExtArgs>
  }

  export type $datosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "datos"
    objects: {
      documento: Prisma.$documentoPayload<ExtArgs> | null
      civil: Prisma.$civilPayload<ExtArgs> | null
      genero: Prisma.$generoPayload<ExtArgs> | null
      pregrado: Prisma.$pregradoPayload<ExtArgs> | null
      semestre: Prisma.$semestrePayload<ExtArgs> | null
      tipo_status: Prisma.$tipo_statusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_dato: number
      nombre: string | null
      apellido: string | null
      fk_id_doc: number | null
      fk_id_civil: number | null
      fk_id_gene: number | null
      correo: string | null
      telefono: string | null
      fk_pregrado: number | null
      fk_id_semestre: number | null
      fk_id_tipo_status: number | null
      asignatura: string | null
      salon: string | null
      dia: string | null
      hora_inicio: string | null
      hora_fin: string | null
    }, ExtArgs["result"]["datos"]>
    composites: {}
  }

  type datosGetPayload<S extends boolean | null | undefined | datosDefaultArgs> = $Result.GetResult<Prisma.$datosPayload, S>

  type datosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<datosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatosCountAggregateInputType | true
    }

  export interface datosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['datos'], meta: { name: 'datos' } }
    /**
     * Find zero or one Datos that matches the filter.
     * @param {datosFindUniqueArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends datosFindUniqueArgs>(args: SelectSubset<T, datosFindUniqueArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {datosFindUniqueOrThrowArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends datosFindUniqueOrThrowArgs>(args: SelectSubset<T, datosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosFindFirstArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends datosFindFirstArgs>(args?: SelectSubset<T, datosFindFirstArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosFindFirstOrThrowArgs} args - Arguments to find a Datos
     * @example
     * // Get one Datos
     * const datos = await prisma.datos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends datosFindFirstOrThrowArgs>(args?: SelectSubset<T, datosFindFirstOrThrowArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datos
     * const datos = await prisma.datos.findMany()
     * 
     * // Get first 10 Datos
     * const datos = await prisma.datos.findMany({ take: 10 })
     * 
     * // Only select the `pk_dato`
     * const datosWithPk_datoOnly = await prisma.datos.findMany({ select: { pk_dato: true } })
     * 
     */
    findMany<T extends datosFindManyArgs>(args?: SelectSubset<T, datosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datos.
     * @param {datosCreateArgs} args - Arguments to create a Datos.
     * @example
     * // Create one Datos
     * const Datos = await prisma.datos.create({
     *   data: {
     *     // ... data to create a Datos
     *   }
     * })
     * 
     */
    create<T extends datosCreateArgs>(args: SelectSubset<T, datosCreateArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datos.
     * @param {datosCreateManyArgs} args - Arguments to create many Datos.
     * @example
     * // Create many Datos
     * const datos = await prisma.datos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends datosCreateManyArgs>(args?: SelectSubset<T, datosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Datos.
     * @param {datosDeleteArgs} args - Arguments to delete one Datos.
     * @example
     * // Delete one Datos
     * const Datos = await prisma.datos.delete({
     *   where: {
     *     // ... filter to delete one Datos
     *   }
     * })
     * 
     */
    delete<T extends datosDeleteArgs>(args: SelectSubset<T, datosDeleteArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datos.
     * @param {datosUpdateArgs} args - Arguments to update one Datos.
     * @example
     * // Update one Datos
     * const datos = await prisma.datos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends datosUpdateArgs>(args: SelectSubset<T, datosUpdateArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datos.
     * @param {datosDeleteManyArgs} args - Arguments to filter Datos to delete.
     * @example
     * // Delete a few Datos
     * const { count } = await prisma.datos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends datosDeleteManyArgs>(args?: SelectSubset<T, datosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datos
     * const datos = await prisma.datos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends datosUpdateManyArgs>(args: SelectSubset<T, datosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Datos.
     * @param {datosUpsertArgs} args - Arguments to update or create a Datos.
     * @example
     * // Update or create a Datos
     * const datos = await prisma.datos.upsert({
     *   create: {
     *     // ... data to create a Datos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datos we want to update
     *   }
     * })
     */
    upsert<T extends datosUpsertArgs>(args: SelectSubset<T, datosUpsertArgs<ExtArgs>>): Prisma__datosClient<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosCountArgs} args - Arguments to filter Datos to count.
     * @example
     * // Count the number of Datos
     * const count = await prisma.datos.count({
     *   where: {
     *     // ... the filter for the Datos we want to count
     *   }
     * })
    **/
    count<T extends datosCountArgs>(
      args?: Subset<T, datosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatosAggregateArgs>(args: Subset<T, DatosAggregateArgs>): Prisma.PrismaPromise<GetDatosAggregateType<T>>

    /**
     * Group by Datos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datosGroupByArgs} args - Group by arguments.
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
      T extends datosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: datosGroupByArgs['orderBy'] }
        : { orderBy?: datosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, datosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the datos model
   */
  readonly fields: datosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for datos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__datosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documento<T extends datos$documentoArgs<ExtArgs> = {}>(args?: Subset<T, datos$documentoArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    civil<T extends datos$civilArgs<ExtArgs> = {}>(args?: Subset<T, datos$civilArgs<ExtArgs>>): Prisma__civilClient<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    genero<T extends datos$generoArgs<ExtArgs> = {}>(args?: Subset<T, datos$generoArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pregrado<T extends datos$pregradoArgs<ExtArgs> = {}>(args?: Subset<T, datos$pregradoArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    semestre<T extends datos$semestreArgs<ExtArgs> = {}>(args?: Subset<T, datos$semestreArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipo_status<T extends datos$tipo_statusArgs<ExtArgs> = {}>(args?: Subset<T, datos$tipo_statusArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the datos model
   */
  interface datosFieldRefs {
    readonly pk_dato: FieldRef<"datos", 'Int'>
    readonly nombre: FieldRef<"datos", 'String'>
    readonly apellido: FieldRef<"datos", 'String'>
    readonly fk_id_doc: FieldRef<"datos", 'Int'>
    readonly fk_id_civil: FieldRef<"datos", 'Int'>
    readonly fk_id_gene: FieldRef<"datos", 'Int'>
    readonly correo: FieldRef<"datos", 'String'>
    readonly telefono: FieldRef<"datos", 'String'>
    readonly fk_pregrado: FieldRef<"datos", 'Int'>
    readonly fk_id_semestre: FieldRef<"datos", 'Int'>
    readonly fk_id_tipo_status: FieldRef<"datos", 'Int'>
    readonly asignatura: FieldRef<"datos", 'String'>
    readonly salon: FieldRef<"datos", 'String'>
    readonly dia: FieldRef<"datos", 'String'>
    readonly hora_inicio: FieldRef<"datos", 'String'>
    readonly hora_fin: FieldRef<"datos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * datos findUnique
   */
  export type datosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos findUniqueOrThrow
   */
  export type datosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos findFirst
   */
  export type datosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos.
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos.
     */
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * datos findFirstOrThrow
   */
  export type datosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos.
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos.
     */
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * datos findMany
   */
  export type datosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter, which datos to fetch.
     */
    where?: datosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos to fetch.
     */
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datos.
     */
    cursor?: datosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos.
     */
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * datos create
   */
  export type datosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * The data needed to create a datos.
     */
    data?: XOR<datosCreateInput, datosUncheckedCreateInput>
  }

  /**
   * datos createMany
   */
  export type datosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many datos.
     */
    data: datosCreateManyInput | datosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * datos update
   */
  export type datosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * The data needed to update a datos.
     */
    data: XOR<datosUpdateInput, datosUncheckedUpdateInput>
    /**
     * Choose, which datos to update.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos updateMany
   */
  export type datosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update datos.
     */
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyInput>
    /**
     * Filter which datos to update
     */
    where?: datosWhereInput
    /**
     * Limit how many datos to update.
     */
    limit?: number
  }

  /**
   * datos upsert
   */
  export type datosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * The filter to search for the datos to update in case it exists.
     */
    where: datosWhereUniqueInput
    /**
     * In case the datos found by the `where` argument doesn't exist, create a new datos with this data.
     */
    create: XOR<datosCreateInput, datosUncheckedCreateInput>
    /**
     * In case the datos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datosUpdateInput, datosUncheckedUpdateInput>
  }

  /**
   * datos delete
   */
  export type datosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    /**
     * Filter which datos to delete.
     */
    where: datosWhereUniqueInput
  }

  /**
   * datos deleteMany
   */
  export type datosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos to delete
     */
    where?: datosWhereInput
    /**
     * Limit how many datos to delete.
     */
    limit?: number
  }

  /**
   * datos.documento
   */
  export type datos$documentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    where?: documentoWhereInput
  }

  /**
   * datos.civil
   */
  export type datos$civilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    where?: civilWhereInput
  }

  /**
   * datos.genero
   */
  export type datos$generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    where?: generoWhereInput
  }

  /**
   * datos.pregrado
   */
  export type datos$pregradoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    where?: pregradoWhereInput
  }

  /**
   * datos.semestre
   */
  export type datos$semestreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    where?: semestreWhereInput
  }

  /**
   * datos.tipo_status
   */
  export type datos$tipo_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    where?: tipo_statusWhereInput
  }

  /**
   * datos without action
   */
  export type datosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
  }


  /**
   * Model documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoAvgAggregateOutputType = {
    pk_id_doc: number | null
    fk_id_estado: number | null
  }

  export type DocumentoSumAggregateOutputType = {
    pk_id_doc: number | null
    fk_id_estado: number | null
  }

  export type DocumentoMinAggregateOutputType = {
    pk_id_doc: number | null
    nombre_documento: string | null
    fk_id_estado: number | null
  }

  export type DocumentoMaxAggregateOutputType = {
    pk_id_doc: number | null
    nombre_documento: string | null
    fk_id_estado: number | null
  }

  export type DocumentoCountAggregateOutputType = {
    pk_id_doc: number
    nombre_documento: number
    fk_id_estado: number
    _all: number
  }


  export type DocumentoAvgAggregateInputType = {
    pk_id_doc?: true
    fk_id_estado?: true
  }

  export type DocumentoSumAggregateInputType = {
    pk_id_doc?: true
    fk_id_estado?: true
  }

  export type DocumentoMinAggregateInputType = {
    pk_id_doc?: true
    nombre_documento?: true
    fk_id_estado?: true
  }

  export type DocumentoMaxAggregateInputType = {
    pk_id_doc?: true
    nombre_documento?: true
    fk_id_estado?: true
  }

  export type DocumentoCountAggregateInputType = {
    pk_id_doc?: true
    nombre_documento?: true
    fk_id_estado?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documento to aggregate.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type documentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentoWhereInput
    orderBy?: documentoOrderByWithAggregationInput | documentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: documentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _avg?: DocumentoAvgAggregateInputType
    _sum?: DocumentoSumAggregateInputType
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    pk_id_doc: number
    nombre_documento: string | null
    fk_id_estado: number | null
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends documentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type documentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_doc?: boolean
    nombre_documento?: boolean
    fk_id_estado?: boolean
    datos?: boolean | documento$datosArgs<ExtArgs>
    estado?: boolean | documento$estadoArgs<ExtArgs>
    _count?: boolean | DocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>



  export type documentoSelectScalar = {
    pk_id_doc?: boolean
    nombre_documento?: boolean
    fk_id_estado?: boolean
  }

  export type documentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_id_doc" | "nombre_documento" | "fk_id_estado", ExtArgs["result"]["documento"]>
  export type documentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | documento$datosArgs<ExtArgs>
    estado?: boolean | documento$estadoArgs<ExtArgs>
    _count?: boolean | DocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $documentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documento"
    objects: {
      datos: Prisma.$datosPayload<ExtArgs>[]
      estado: Prisma.$estadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_doc: number
      nombre_documento: string | null
      fk_id_estado: number | null
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }

  type documentoGetPayload<S extends boolean | null | undefined | documentoDefaultArgs> = $Result.GetResult<Prisma.$documentoPayload, S>

  type documentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface documentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documento'], meta: { name: 'documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {documentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentoFindUniqueArgs>(args: SelectSubset<T, documentoFindUniqueArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentoFindUniqueOrThrowArgs>(args: SelectSubset<T, documentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentoFindFirstArgs>(args?: SelectSubset<T, documentoFindFirstArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentoFindFirstOrThrowArgs>(args?: SelectSubset<T, documentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_doc`
     * const documentoWithPk_id_docOnly = await prisma.documento.findMany({ select: { pk_id_doc: true } })
     * 
     */
    findMany<T extends documentoFindManyArgs>(args?: SelectSubset<T, documentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento.
     * @param {documentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
     */
    create<T extends documentoCreateArgs>(args: SelectSubset<T, documentoCreateArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {documentoCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentoCreateManyArgs>(args?: SelectSubset<T, documentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documento.
     * @param {documentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
     */
    delete<T extends documentoDeleteArgs>(args: SelectSubset<T, documentoDeleteArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento.
     * @param {documentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentoUpdateArgs>(args: SelectSubset<T, documentoUpdateArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {documentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentoDeleteManyArgs>(args?: SelectSubset<T, documentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentoUpdateManyArgs>(args: SelectSubset<T, documentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documento.
     * @param {documentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
     */
    upsert<T extends documentoUpsertArgs>(args: SelectSubset<T, documentoUpsertArgs<ExtArgs>>): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends documentoCountArgs>(
      args?: Subset<T, documentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoGroupByArgs} args - Group by arguments.
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
      T extends documentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentoGroupByArgs['orderBy'] }
        : { orderBy?: documentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, documentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documento model
   */
  readonly fields: documentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datos<T extends documento$datosArgs<ExtArgs> = {}>(args?: Subset<T, documento$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estado<T extends documento$estadoArgs<ExtArgs> = {}>(args?: Subset<T, documento$estadoArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the documento model
   */
  interface documentoFieldRefs {
    readonly pk_id_doc: FieldRef<"documento", 'Int'>
    readonly nombre_documento: FieldRef<"documento", 'String'>
    readonly fk_id_estado: FieldRef<"documento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * documento findUnique
   */
  export type documentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where: documentoWhereUniqueInput
  }

  /**
   * documento findUniqueOrThrow
   */
  export type documentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where: documentoWhereUniqueInput
  }

  /**
   * documento findFirst
   */
  export type documentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentos.
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * documento findFirstOrThrow
   */
  export type documentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentos.
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * documento findMany
   */
  export type documentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documentos.
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * documento create
   */
  export type documentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * The data needed to create a documento.
     */
    data: XOR<documentoCreateInput, documentoUncheckedCreateInput>
  }

  /**
   * documento createMany
   */
  export type documentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documentos.
     */
    data: documentoCreateManyInput | documentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documento update
   */
  export type documentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * The data needed to update a documento.
     */
    data: XOR<documentoUpdateInput, documentoUncheckedUpdateInput>
    /**
     * Choose, which documento to update.
     */
    where: documentoWhereUniqueInput
  }

  /**
   * documento updateMany
   */
  export type documentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documentos.
     */
    data: XOR<documentoUpdateManyMutationInput, documentoUncheckedUpdateManyInput>
    /**
     * Filter which documentos to update
     */
    where?: documentoWhereInput
    /**
     * Limit how many documentos to update.
     */
    limit?: number
  }

  /**
   * documento upsert
   */
  export type documentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * The filter to search for the documento to update in case it exists.
     */
    where: documentoWhereUniqueInput
    /**
     * In case the documento found by the `where` argument doesn't exist, create a new documento with this data.
     */
    create: XOR<documentoCreateInput, documentoUncheckedCreateInput>
    /**
     * In case the documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentoUpdateInput, documentoUncheckedUpdateInput>
  }

  /**
   * documento delete
   */
  export type documentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    /**
     * Filter which documento to delete.
     */
    where: documentoWhereUniqueInput
  }

  /**
   * documento deleteMany
   */
  export type documentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentos to delete
     */
    where?: documentoWhereInput
    /**
     * Limit how many documentos to delete.
     */
    limit?: number
  }

  /**
   * documento.datos
   */
  export type documento$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * documento.estado
   */
  export type documento$estadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    where?: estadoWhereInput
  }

  /**
   * documento without action
   */
  export type documentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
  }


  /**
   * Model estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    pk_id_estado: number | null
  }

  export type EstadoSumAggregateOutputType = {
    pk_id_estado: number | null
  }

  export type EstadoMinAggregateOutputType = {
    pk_id_estado: number | null
    nombre: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    pk_id_estado: number | null
    nombre: string | null
  }

  export type EstadoCountAggregateOutputType = {
    pk_id_estado: number
    nombre: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    pk_id_estado?: true
  }

  export type EstadoSumAggregateInputType = {
    pk_id_estado?: true
  }

  export type EstadoMinAggregateInputType = {
    pk_id_estado?: true
    nombre?: true
  }

  export type EstadoMaxAggregateInputType = {
    pk_id_estado?: true
    nombre?: true
  }

  export type EstadoCountAggregateInputType = {
    pk_id_estado?: true
    nombre?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado to aggregate.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type estadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estadoWhereInput
    orderBy?: estadoOrderByWithAggregationInput | estadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: estadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    pk_id_estado: number
    nombre: string | null
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends estadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type estadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_estado?: boolean
    nombre?: boolean
    civil?: boolean | estado$civilArgs<ExtArgs>
    documento?: boolean | estado$documentoArgs<ExtArgs>
    genero?: boolean | estado$generoArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>



  export type estadoSelectScalar = {
    pk_id_estado?: boolean
    nombre?: boolean
  }

  export type estadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_id_estado" | "nombre", ExtArgs["result"]["estado"]>
  export type estadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    civil?: boolean | estado$civilArgs<ExtArgs>
    documento?: boolean | estado$documentoArgs<ExtArgs>
    genero?: boolean | estado$generoArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $estadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado"
    objects: {
      civil: Prisma.$civilPayload<ExtArgs>[]
      documento: Prisma.$documentoPayload<ExtArgs>[]
      genero: Prisma.$generoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_estado: number
      nombre: string | null
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type estadoGetPayload<S extends boolean | null | undefined | estadoDefaultArgs> = $Result.GetResult<Prisma.$estadoPayload, S>

  type estadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface estadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado'], meta: { name: 'estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {estadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estadoFindUniqueArgs>(args: SelectSubset<T, estadoFindUniqueArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estadoFindUniqueOrThrowArgs>(args: SelectSubset<T, estadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estadoFindFirstArgs>(args?: SelectSubset<T, estadoFindFirstArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estadoFindFirstOrThrowArgs>(args?: SelectSubset<T, estadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_estado`
     * const estadoWithPk_id_estadoOnly = await prisma.estado.findMany({ select: { pk_id_estado: true } })
     * 
     */
    findMany<T extends estadoFindManyArgs>(args?: SelectSubset<T, estadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {estadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends estadoCreateArgs>(args: SelectSubset<T, estadoCreateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {estadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estadoCreateManyArgs>(args?: SelectSubset<T, estadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estado.
     * @param {estadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends estadoDeleteArgs>(args: SelectSubset<T, estadoDeleteArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {estadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estadoUpdateArgs>(args: SelectSubset<T, estadoUpdateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {estadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estadoDeleteManyArgs>(args?: SelectSubset<T, estadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estadoUpdateManyArgs>(args: SelectSubset<T, estadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estado.
     * @param {estadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends estadoUpsertArgs>(args: SelectSubset<T, estadoUpsertArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends estadoCountArgs>(
      args?: Subset<T, estadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoGroupByArgs} args - Group by arguments.
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
      T extends estadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estadoGroupByArgs['orderBy'] }
        : { orderBy?: estadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado model
   */
  readonly fields: estadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    civil<T extends estado$civilArgs<ExtArgs> = {}>(args?: Subset<T, estado$civilArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$civilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documento<T extends estado$documentoArgs<ExtArgs> = {}>(args?: Subset<T, estado$documentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genero<T extends estado$generoArgs<ExtArgs> = {}>(args?: Subset<T, estado$generoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estado model
   */
  interface estadoFieldRefs {
    readonly pk_id_estado: FieldRef<"estado", 'Int'>
    readonly nombre: FieldRef<"estado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estado findUnique
   */
  export type estadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findUniqueOrThrow
   */
  export type estadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findFirst
   */
  export type estadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findFirstOrThrow
   */
  export type estadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findMany
   */
  export type estadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado create
   */
  export type estadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The data needed to create a estado.
     */
    data: XOR<estadoCreateInput, estadoUncheckedCreateInput>
  }

  /**
   * estado createMany
   */
  export type estadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado update
   */
  export type estadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The data needed to update a estado.
     */
    data: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
    /**
     * Choose, which estado to update.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado updateMany
   */
  export type estadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado upsert
   */
  export type estadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The filter to search for the estado to update in case it exists.
     */
    where: estadoWhereUniqueInput
    /**
     * In case the estado found by the `where` argument doesn't exist, create a new estado with this data.
     */
    create: XOR<estadoCreateInput, estadoUncheckedCreateInput>
    /**
     * In case the estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
  }

  /**
   * estado delete
   */
  export type estadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter which estado to delete.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado deleteMany
   */
  export type estadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados to delete
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to delete.
     */
    limit?: number
  }

  /**
   * estado.civil
   */
  export type estado$civilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the civil
     */
    select?: civilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the civil
     */
    omit?: civilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: civilInclude<ExtArgs> | null
    where?: civilWhereInput
    orderBy?: civilOrderByWithRelationInput | civilOrderByWithRelationInput[]
    cursor?: civilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CivilScalarFieldEnum | CivilScalarFieldEnum[]
  }

  /**
   * estado.documento
   */
  export type estado$documentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documento
     */
    omit?: documentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentoInclude<ExtArgs> | null
    where?: documentoWhereInput
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    cursor?: documentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * estado.genero
   */
  export type estado$generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    where?: generoWhereInput
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    cursor?: generoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * estado without action
   */
  export type estadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
  }


  /**
   * Model genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    pk_id_gene: number | null
    fk_id_estado: number | null
  }

  export type GeneroSumAggregateOutputType = {
    pk_id_gene: number | null
    fk_id_estado: number | null
  }

  export type GeneroMinAggregateOutputType = {
    pk_id_gene: number | null
    nom_genero: string | null
    fk_id_estado: number | null
  }

  export type GeneroMaxAggregateOutputType = {
    pk_id_gene: number | null
    nom_genero: string | null
    fk_id_estado: number | null
  }

  export type GeneroCountAggregateOutputType = {
    pk_id_gene: number
    nom_genero: number
    fk_id_estado: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    pk_id_gene?: true
    fk_id_estado?: true
  }

  export type GeneroSumAggregateInputType = {
    pk_id_gene?: true
    fk_id_estado?: true
  }

  export type GeneroMinAggregateInputType = {
    pk_id_gene?: true
    nom_genero?: true
    fk_id_estado?: true
  }

  export type GeneroMaxAggregateInputType = {
    pk_id_gene?: true
    nom_genero?: true
    fk_id_estado?: true
  }

  export type GeneroCountAggregateInputType = {
    pk_id_gene?: true
    nom_genero?: true
    fk_id_estado?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genero to aggregate.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type generoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generoWhereInput
    orderBy?: generoOrderByWithAggregationInput | generoOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: generoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    pk_id_gene: number
    nom_genero: string | null
    fk_id_estado: number | null
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends generoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type generoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_gene?: boolean
    nom_genero?: boolean
    fk_id_estado?: boolean
    datos?: boolean | genero$datosArgs<ExtArgs>
    estado?: boolean | genero$estadoArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type generoSelectScalar = {
    pk_id_gene?: boolean
    nom_genero?: boolean
    fk_id_estado?: boolean
  }

  export type generoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_id_gene" | "nom_genero" | "fk_id_estado", ExtArgs["result"]["genero"]>
  export type generoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | genero$datosArgs<ExtArgs>
    estado?: boolean | genero$estadoArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $generoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genero"
    objects: {
      datos: Prisma.$datosPayload<ExtArgs>[]
      estado: Prisma.$estadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_gene: number
      nom_genero: string | null
      fk_id_estado: number | null
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type generoGetPayload<S extends boolean | null | undefined | generoDefaultArgs> = $Result.GetResult<Prisma.$generoPayload, S>

  type generoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<generoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface generoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genero'], meta: { name: 'genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {generoFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends generoFindUniqueArgs>(args: SelectSubset<T, generoFindUniqueArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {generoFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends generoFindUniqueOrThrowArgs>(args: SelectSubset<T, generoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends generoFindFirstArgs>(args?: SelectSubset<T, generoFindFirstArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends generoFindFirstOrThrowArgs>(args?: SelectSubset<T, generoFindFirstOrThrowArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_gene`
     * const generoWithPk_id_geneOnly = await prisma.genero.findMany({ select: { pk_id_gene: true } })
     * 
     */
    findMany<T extends generoFindManyArgs>(args?: SelectSubset<T, generoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {generoCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends generoCreateArgs>(args: SelectSubset<T, generoCreateArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {generoCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends generoCreateManyArgs>(args?: SelectSubset<T, generoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {generoDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends generoDeleteArgs>(args: SelectSubset<T, generoDeleteArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {generoUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends generoUpdateArgs>(args: SelectSubset<T, generoUpdateArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {generoDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends generoDeleteManyArgs>(args?: SelectSubset<T, generoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends generoUpdateManyArgs>(args: SelectSubset<T, generoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {generoUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends generoUpsertArgs>(args: SelectSubset<T, generoUpsertArgs<ExtArgs>>): Prisma__generoClient<$Result.GetResult<Prisma.$generoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends generoCountArgs>(
      args?: Subset<T, generoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generoGroupByArgs} args - Group by arguments.
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
      T extends generoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: generoGroupByArgs['orderBy'] }
        : { orderBy?: generoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, generoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genero model
   */
  readonly fields: generoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__generoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datos<T extends genero$datosArgs<ExtArgs> = {}>(args?: Subset<T, genero$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estado<T extends genero$estadoArgs<ExtArgs> = {}>(args?: Subset<T, genero$estadoArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the genero model
   */
  interface generoFieldRefs {
    readonly pk_id_gene: FieldRef<"genero", 'Int'>
    readonly nom_genero: FieldRef<"genero", 'String'>
    readonly fk_id_estado: FieldRef<"genero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * genero findUnique
   */
  export type generoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero findUniqueOrThrow
   */
  export type generoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero findFirst
   */
  export type generoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * genero findFirstOrThrow
   */
  export type generoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which genero to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * genero findMany
   */
  export type generoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where?: generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generoOrderByWithRelationInput | generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing generos.
     */
    cursor?: generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * genero create
   */
  export type generoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The data needed to create a genero.
     */
    data: XOR<generoCreateInput, generoUncheckedCreateInput>
  }

  /**
   * genero createMany
   */
  export type generoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many generos.
     */
    data: generoCreateManyInput | generoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genero update
   */
  export type generoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The data needed to update a genero.
     */
    data: XOR<generoUpdateInput, generoUncheckedUpdateInput>
    /**
     * Choose, which genero to update.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero updateMany
   */
  export type generoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update generos.
     */
    data: XOR<generoUpdateManyMutationInput, generoUncheckedUpdateManyInput>
    /**
     * Filter which generos to update
     */
    where?: generoWhereInput
    /**
     * Limit how many generos to update.
     */
    limit?: number
  }

  /**
   * genero upsert
   */
  export type generoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * The filter to search for the genero to update in case it exists.
     */
    where: generoWhereUniqueInput
    /**
     * In case the genero found by the `where` argument doesn't exist, create a new genero with this data.
     */
    create: XOR<generoCreateInput, generoUncheckedCreateInput>
    /**
     * In case the genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<generoUpdateInput, generoUncheckedUpdateInput>
  }

  /**
   * genero delete
   */
  export type generoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
    /**
     * Filter which genero to delete.
     */
    where: generoWhereUniqueInput
  }

  /**
   * genero deleteMany
   */
  export type generoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generos to delete
     */
    where?: generoWhereInput
    /**
     * Limit how many generos to delete.
     */
    limit?: number
  }

  /**
   * genero.datos
   */
  export type genero$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * genero.estado
   */
  export type genero$estadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    where?: estadoWhereInput
  }

  /**
   * genero without action
   */
  export type generoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genero
     */
    select?: generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genero
     */
    omit?: generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generoInclude<ExtArgs> | null
  }


  /**
   * Model horarios
   */

  export type AggregateHorarios = {
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  export type HorariosAvgAggregateOutputType = {
    pk_horario: number | null
  }

  export type HorariosSumAggregateOutputType = {
    pk_horario: number | null
  }

  export type HorariosMinAggregateOutputType = {
    pk_horario: number | null
    dia: string | null
    hora_inicio: Date | null
    hora_fin: Date | null
  }

  export type HorariosMaxAggregateOutputType = {
    pk_horario: number | null
    dia: string | null
    hora_inicio: Date | null
    hora_fin: Date | null
  }

  export type HorariosCountAggregateOutputType = {
    pk_horario: number
    dia: number
    hora_inicio: number
    hora_fin: number
    _all: number
  }


  export type HorariosAvgAggregateInputType = {
    pk_horario?: true
  }

  export type HorariosSumAggregateInputType = {
    pk_horario?: true
  }

  export type HorariosMinAggregateInputType = {
    pk_horario?: true
    dia?: true
    hora_inicio?: true
    hora_fin?: true
  }

  export type HorariosMaxAggregateInputType = {
    pk_horario?: true
    dia?: true
    hora_inicio?: true
    hora_fin?: true
  }

  export type HorariosCountAggregateInputType = {
    pk_horario?: true
    dia?: true
    hora_inicio?: true
    hora_fin?: true
    _all?: true
  }

  export type HorariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to aggregate.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned horarios
    **/
    _count?: true | HorariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorariosMaxAggregateInputType
  }

  export type GetHorariosAggregateType<T extends HorariosAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarios[P]>
      : GetScalarType<T[P], AggregateHorarios[P]>
  }




  export type horariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horariosWhereInput
    orderBy?: horariosOrderByWithAggregationInput | horariosOrderByWithAggregationInput[]
    by: HorariosScalarFieldEnum[] | HorariosScalarFieldEnum
    having?: horariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorariosCountAggregateInputType | true
    _avg?: HorariosAvgAggregateInputType
    _sum?: HorariosSumAggregateInputType
    _min?: HorariosMinAggregateInputType
    _max?: HorariosMaxAggregateInputType
  }

  export type HorariosGroupByOutputType = {
    pk_horario: number
    dia: string | null
    hora_inicio: Date | null
    hora_fin: Date | null
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  type GetHorariosGroupByPayload<T extends horariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorariosGroupByOutputType[P]>
            : GetScalarType<T[P], HorariosGroupByOutputType[P]>
        }
      >
    >


  export type horariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_horario?: boolean
    dia?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
    mov_asig_au?: boolean | horarios$mov_asig_auArgs<ExtArgs>
    _count?: boolean | HorariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarios"]>



  export type horariosSelectScalar = {
    pk_horario?: boolean
    dia?: boolean
    hora_inicio?: boolean
    hora_fin?: boolean
  }

  export type horariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_horario" | "dia" | "hora_inicio" | "hora_fin", ExtArgs["result"]["horarios"]>
  export type horariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mov_asig_au?: boolean | horarios$mov_asig_auArgs<ExtArgs>
    _count?: boolean | HorariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $horariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "horarios"
    objects: {
      mov_asig_au: Prisma.$mov_asig_auPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_horario: number
      dia: string | null
      hora_inicio: Date | null
      hora_fin: Date | null
    }, ExtArgs["result"]["horarios"]>
    composites: {}
  }

  type horariosGetPayload<S extends boolean | null | undefined | horariosDefaultArgs> = $Result.GetResult<Prisma.$horariosPayload, S>

  type horariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<horariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorariosCountAggregateInputType | true
    }

  export interface horariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['horarios'], meta: { name: 'horarios' } }
    /**
     * Find zero or one Horarios that matches the filter.
     * @param {horariosFindUniqueArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends horariosFindUniqueArgs>(args: SelectSubset<T, horariosFindUniqueArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {horariosFindUniqueOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends horariosFindUniqueOrThrowArgs>(args: SelectSubset<T, horariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends horariosFindFirstArgs>(args?: SelectSubset<T, horariosFindFirstArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends horariosFindFirstOrThrowArgs>(args?: SelectSubset<T, horariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horarios.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horarios.findMany({ take: 10 })
     * 
     * // Only select the `pk_horario`
     * const horariosWithPk_horarioOnly = await prisma.horarios.findMany({ select: { pk_horario: true } })
     * 
     */
    findMany<T extends horariosFindManyArgs>(args?: SelectSubset<T, horariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horarios.
     * @param {horariosCreateArgs} args - Arguments to create a Horarios.
     * @example
     * // Create one Horarios
     * const Horarios = await prisma.horarios.create({
     *   data: {
     *     // ... data to create a Horarios
     *   }
     * })
     * 
     */
    create<T extends horariosCreateArgs>(args: SelectSubset<T, horariosCreateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {horariosCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends horariosCreateManyArgs>(args?: SelectSubset<T, horariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Horarios.
     * @param {horariosDeleteArgs} args - Arguments to delete one Horarios.
     * @example
     * // Delete one Horarios
     * const Horarios = await prisma.horarios.delete({
     *   where: {
     *     // ... filter to delete one Horarios
     *   }
     * })
     * 
     */
    delete<T extends horariosDeleteArgs>(args: SelectSubset<T, horariosDeleteArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horarios.
     * @param {horariosUpdateArgs} args - Arguments to update one Horarios.
     * @example
     * // Update one Horarios
     * const horarios = await prisma.horarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends horariosUpdateArgs>(args: SelectSubset<T, horariosUpdateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {horariosDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends horariosDeleteManyArgs>(args?: SelectSubset<T, horariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends horariosUpdateManyArgs>(args: SelectSubset<T, horariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Horarios.
     * @param {horariosUpsertArgs} args - Arguments to update or create a Horarios.
     * @example
     * // Update or create a Horarios
     * const horarios = await prisma.horarios.upsert({
     *   create: {
     *     // ... data to create a Horarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horarios we want to update
     *   }
     * })
     */
    upsert<T extends horariosUpsertArgs>(args: SelectSubset<T, horariosUpsertArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horarios.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends horariosCountArgs>(
      args?: Subset<T, horariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorariosAggregateArgs>(args: Subset<T, HorariosAggregateArgs>): Prisma.PrismaPromise<GetHorariosAggregateType<T>>

    /**
     * Group by Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosGroupByArgs} args - Group by arguments.
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
      T extends horariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: horariosGroupByArgs['orderBy'] }
        : { orderBy?: horariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, horariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the horarios model
   */
  readonly fields: horariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for horarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__horariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mov_asig_au<T extends horarios$mov_asig_auArgs<ExtArgs> = {}>(args?: Subset<T, horarios$mov_asig_auArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the horarios model
   */
  interface horariosFieldRefs {
    readonly pk_horario: FieldRef<"horarios", 'Int'>
    readonly dia: FieldRef<"horarios", 'String'>
    readonly hora_inicio: FieldRef<"horarios", 'DateTime'>
    readonly hora_fin: FieldRef<"horarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * horarios findUnique
   */
  export type horariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findUniqueOrThrow
   */
  export type horariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findFirst
   */
  export type horariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findFirstOrThrow
   */
  export type horariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findMany
   */
  export type horariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios create
   */
  export type horariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The data needed to create a horarios.
     */
    data?: XOR<horariosCreateInput, horariosUncheckedCreateInput>
  }

  /**
   * horarios createMany
   */
  export type horariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many horarios.
     */
    data: horariosCreateManyInput | horariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horarios update
   */
  export type horariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The data needed to update a horarios.
     */
    data: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
    /**
     * Choose, which horarios to update.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios updateMany
   */
  export type horariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update horarios.
     */
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to update.
     */
    limit?: number
  }

  /**
   * horarios upsert
   */
  export type horariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The filter to search for the horarios to update in case it exists.
     */
    where: horariosWhereUniqueInput
    /**
     * In case the horarios found by the `where` argument doesn't exist, create a new horarios with this data.
     */
    create: XOR<horariosCreateInput, horariosUncheckedCreateInput>
    /**
     * In case the horarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
  }

  /**
   * horarios delete
   */
  export type horariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter which horarios to delete.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios deleteMany
   */
  export type horariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to delete
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to delete.
     */
    limit?: number
  }

  /**
   * horarios.mov_asig_au
   */
  export type horarios$mov_asig_auArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    where?: mov_asig_auWhereInput
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    cursor?: mov_asig_auWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mov_asig_auScalarFieldEnum | Mov_asig_auScalarFieldEnum[]
  }

  /**
   * horarios without action
   */
  export type horariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
  }


  /**
   * Model laboratorio
   */

  export type AggregateLaboratorio = {
    _count: LaboratorioCountAggregateOutputType | null
    _avg: LaboratorioAvgAggregateOutputType | null
    _sum: LaboratorioSumAggregateOutputType | null
    _min: LaboratorioMinAggregateOutputType | null
    _max: LaboratorioMaxAggregateOutputType | null
  }

  export type LaboratorioAvgAggregateOutputType = {
    pk_lab: number | null
    capacidad: number | null
  }

  export type LaboratorioSumAggregateOutputType = {
    pk_lab: number | null
    capacidad: number | null
  }

  export type LaboratorioMinAggregateOutputType = {
    pk_lab: number | null
    nombre_lab: string | null
    capacidad: number | null
  }

  export type LaboratorioMaxAggregateOutputType = {
    pk_lab: number | null
    nombre_lab: string | null
    capacidad: number | null
  }

  export type LaboratorioCountAggregateOutputType = {
    pk_lab: number
    nombre_lab: number
    capacidad: number
    _all: number
  }


  export type LaboratorioAvgAggregateInputType = {
    pk_lab?: true
    capacidad?: true
  }

  export type LaboratorioSumAggregateInputType = {
    pk_lab?: true
    capacidad?: true
  }

  export type LaboratorioMinAggregateInputType = {
    pk_lab?: true
    nombre_lab?: true
    capacidad?: true
  }

  export type LaboratorioMaxAggregateInputType = {
    pk_lab?: true
    nombre_lab?: true
    capacidad?: true
  }

  export type LaboratorioCountAggregateInputType = {
    pk_lab?: true
    nombre_lab?: true
    capacidad?: true
    _all?: true
  }

  export type LaboratorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laboratorio to aggregate.
     */
    where?: laboratorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laboratorios to fetch.
     */
    orderBy?: laboratorioOrderByWithRelationInput | laboratorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: laboratorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laboratorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned laboratorios
    **/
    _count?: true | LaboratorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaboratorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaboratorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaboratorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaboratorioMaxAggregateInputType
  }

  export type GetLaboratorioAggregateType<T extends LaboratorioAggregateArgs> = {
        [P in keyof T & keyof AggregateLaboratorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaboratorio[P]>
      : GetScalarType<T[P], AggregateLaboratorio[P]>
  }




  export type laboratorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laboratorioWhereInput
    orderBy?: laboratorioOrderByWithAggregationInput | laboratorioOrderByWithAggregationInput[]
    by: LaboratorioScalarFieldEnum[] | LaboratorioScalarFieldEnum
    having?: laboratorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaboratorioCountAggregateInputType | true
    _avg?: LaboratorioAvgAggregateInputType
    _sum?: LaboratorioSumAggregateInputType
    _min?: LaboratorioMinAggregateInputType
    _max?: LaboratorioMaxAggregateInputType
  }

  export type LaboratorioGroupByOutputType = {
    pk_lab: number
    nombre_lab: string | null
    capacidad: number | null
    _count: LaboratorioCountAggregateOutputType | null
    _avg: LaboratorioAvgAggregateOutputType | null
    _sum: LaboratorioSumAggregateOutputType | null
    _min: LaboratorioMinAggregateOutputType | null
    _max: LaboratorioMaxAggregateOutputType | null
  }

  type GetLaboratorioGroupByPayload<T extends laboratorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaboratorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaboratorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaboratorioGroupByOutputType[P]>
            : GetScalarType<T[P], LaboratorioGroupByOutputType[P]>
        }
      >
    >


  export type laboratorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_lab?: boolean
    nombre_lab?: boolean
    capacidad?: boolean
  }, ExtArgs["result"]["laboratorio"]>



  export type laboratorioSelectScalar = {
    pk_lab?: boolean
    nombre_lab?: boolean
    capacidad?: boolean
  }

  export type laboratorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_lab" | "nombre_lab" | "capacidad", ExtArgs["result"]["laboratorio"]>

  export type $laboratorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "laboratorio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk_lab: number
      nombre_lab: string | null
      capacidad: number | null
    }, ExtArgs["result"]["laboratorio"]>
    composites: {}
  }

  type laboratorioGetPayload<S extends boolean | null | undefined | laboratorioDefaultArgs> = $Result.GetResult<Prisma.$laboratorioPayload, S>

  type laboratorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<laboratorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaboratorioCountAggregateInputType | true
    }

  export interface laboratorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['laboratorio'], meta: { name: 'laboratorio' } }
    /**
     * Find zero or one Laboratorio that matches the filter.
     * @param {laboratorioFindUniqueArgs} args - Arguments to find a Laboratorio
     * @example
     * // Get one Laboratorio
     * const laboratorio = await prisma.laboratorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends laboratorioFindUniqueArgs>(args: SelectSubset<T, laboratorioFindUniqueArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laboratorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {laboratorioFindUniqueOrThrowArgs} args - Arguments to find a Laboratorio
     * @example
     * // Get one Laboratorio
     * const laboratorio = await prisma.laboratorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends laboratorioFindUniqueOrThrowArgs>(args: SelectSubset<T, laboratorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laboratorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laboratorioFindFirstArgs} args - Arguments to find a Laboratorio
     * @example
     * // Get one Laboratorio
     * const laboratorio = await prisma.laboratorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends laboratorioFindFirstArgs>(args?: SelectSubset<T, laboratorioFindFirstArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laboratorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laboratorioFindFirstOrThrowArgs} args - Arguments to find a Laboratorio
     * @example
     * // Get one Laboratorio
     * const laboratorio = await prisma.laboratorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends laboratorioFindFirstOrThrowArgs>(args?: SelectSubset<T, laboratorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laboratorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laboratorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laboratorios
     * const laboratorios = await prisma.laboratorio.findMany()
     * 
     * // Get first 10 Laboratorios
     * const laboratorios = await prisma.laboratorio.findMany({ take: 10 })
     * 
     * // Only select the `pk_lab`
     * const laboratorioWithPk_labOnly = await prisma.laboratorio.findMany({ select: { pk_lab: true } })
     * 
     */
    findMany<T extends laboratorioFindManyArgs>(args?: SelectSubset<T, laboratorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laboratorio.
     * @param {laboratorioCreateArgs} args - Arguments to create a Laboratorio.
     * @example
     * // Create one Laboratorio
     * const Laboratorio = await prisma.laboratorio.create({
     *   data: {
     *     // ... data to create a Laboratorio
     *   }
     * })
     * 
     */
    create<T extends laboratorioCreateArgs>(args: SelectSubset<T, laboratorioCreateArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laboratorios.
     * @param {laboratorioCreateManyArgs} args - Arguments to create many Laboratorios.
     * @example
     * // Create many Laboratorios
     * const laboratorio = await prisma.laboratorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends laboratorioCreateManyArgs>(args?: SelectSubset<T, laboratorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Laboratorio.
     * @param {laboratorioDeleteArgs} args - Arguments to delete one Laboratorio.
     * @example
     * // Delete one Laboratorio
     * const Laboratorio = await prisma.laboratorio.delete({
     *   where: {
     *     // ... filter to delete one Laboratorio
     *   }
     * })
     * 
     */
    delete<T extends laboratorioDeleteArgs>(args: SelectSubset<T, laboratorioDeleteArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laboratorio.
     * @param {laboratorioUpdateArgs} args - Arguments to update one Laboratorio.
     * @example
     * // Update one Laboratorio
     * const laboratorio = await prisma.laboratorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends laboratorioUpdateArgs>(args: SelectSubset<T, laboratorioUpdateArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laboratorios.
     * @param {laboratorioDeleteManyArgs} args - Arguments to filter Laboratorios to delete.
     * @example
     * // Delete a few Laboratorios
     * const { count } = await prisma.laboratorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends laboratorioDeleteManyArgs>(args?: SelectSubset<T, laboratorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laboratorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laboratorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laboratorios
     * const laboratorio = await prisma.laboratorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends laboratorioUpdateManyArgs>(args: SelectSubset<T, laboratorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Laboratorio.
     * @param {laboratorioUpsertArgs} args - Arguments to update or create a Laboratorio.
     * @example
     * // Update or create a Laboratorio
     * const laboratorio = await prisma.laboratorio.upsert({
     *   create: {
     *     // ... data to create a Laboratorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laboratorio we want to update
     *   }
     * })
     */
    upsert<T extends laboratorioUpsertArgs>(args: SelectSubset<T, laboratorioUpsertArgs<ExtArgs>>): Prisma__laboratorioClient<$Result.GetResult<Prisma.$laboratorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laboratorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laboratorioCountArgs} args - Arguments to filter Laboratorios to count.
     * @example
     * // Count the number of Laboratorios
     * const count = await prisma.laboratorio.count({
     *   where: {
     *     // ... the filter for the Laboratorios we want to count
     *   }
     * })
    **/
    count<T extends laboratorioCountArgs>(
      args?: Subset<T, laboratorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaboratorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laboratorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaboratorioAggregateArgs>(args: Subset<T, LaboratorioAggregateArgs>): Prisma.PrismaPromise<GetLaboratorioAggregateType<T>>

    /**
     * Group by Laboratorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laboratorioGroupByArgs} args - Group by arguments.
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
      T extends laboratorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: laboratorioGroupByArgs['orderBy'] }
        : { orderBy?: laboratorioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, laboratorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaboratorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the laboratorio model
   */
  readonly fields: laboratorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for laboratorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__laboratorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the laboratorio model
   */
  interface laboratorioFieldRefs {
    readonly pk_lab: FieldRef<"laboratorio", 'Int'>
    readonly nombre_lab: FieldRef<"laboratorio", 'String'>
    readonly capacidad: FieldRef<"laboratorio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * laboratorio findUnique
   */
  export type laboratorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * Filter, which laboratorio to fetch.
     */
    where: laboratorioWhereUniqueInput
  }

  /**
   * laboratorio findUniqueOrThrow
   */
  export type laboratorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * Filter, which laboratorio to fetch.
     */
    where: laboratorioWhereUniqueInput
  }

  /**
   * laboratorio findFirst
   */
  export type laboratorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * Filter, which laboratorio to fetch.
     */
    where?: laboratorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laboratorios to fetch.
     */
    orderBy?: laboratorioOrderByWithRelationInput | laboratorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for laboratorios.
     */
    cursor?: laboratorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laboratorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of laboratorios.
     */
    distinct?: LaboratorioScalarFieldEnum | LaboratorioScalarFieldEnum[]
  }

  /**
   * laboratorio findFirstOrThrow
   */
  export type laboratorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * Filter, which laboratorio to fetch.
     */
    where?: laboratorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laboratorios to fetch.
     */
    orderBy?: laboratorioOrderByWithRelationInput | laboratorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for laboratorios.
     */
    cursor?: laboratorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laboratorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of laboratorios.
     */
    distinct?: LaboratorioScalarFieldEnum | LaboratorioScalarFieldEnum[]
  }

  /**
   * laboratorio findMany
   */
  export type laboratorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * Filter, which laboratorios to fetch.
     */
    where?: laboratorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laboratorios to fetch.
     */
    orderBy?: laboratorioOrderByWithRelationInput | laboratorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing laboratorios.
     */
    cursor?: laboratorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laboratorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laboratorios.
     */
    skip?: number
    distinct?: LaboratorioScalarFieldEnum | LaboratorioScalarFieldEnum[]
  }

  /**
   * laboratorio create
   */
  export type laboratorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * The data needed to create a laboratorio.
     */
    data?: XOR<laboratorioCreateInput, laboratorioUncheckedCreateInput>
  }

  /**
   * laboratorio createMany
   */
  export type laboratorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many laboratorios.
     */
    data: laboratorioCreateManyInput | laboratorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * laboratorio update
   */
  export type laboratorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * The data needed to update a laboratorio.
     */
    data: XOR<laboratorioUpdateInput, laboratorioUncheckedUpdateInput>
    /**
     * Choose, which laboratorio to update.
     */
    where: laboratorioWhereUniqueInput
  }

  /**
   * laboratorio updateMany
   */
  export type laboratorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update laboratorios.
     */
    data: XOR<laboratorioUpdateManyMutationInput, laboratorioUncheckedUpdateManyInput>
    /**
     * Filter which laboratorios to update
     */
    where?: laboratorioWhereInput
    /**
     * Limit how many laboratorios to update.
     */
    limit?: number
  }

  /**
   * laboratorio upsert
   */
  export type laboratorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * The filter to search for the laboratorio to update in case it exists.
     */
    where: laboratorioWhereUniqueInput
    /**
     * In case the laboratorio found by the `where` argument doesn't exist, create a new laboratorio with this data.
     */
    create: XOR<laboratorioCreateInput, laboratorioUncheckedCreateInput>
    /**
     * In case the laboratorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<laboratorioUpdateInput, laboratorioUncheckedUpdateInput>
  }

  /**
   * laboratorio delete
   */
  export type laboratorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
    /**
     * Filter which laboratorio to delete.
     */
    where: laboratorioWhereUniqueInput
  }

  /**
   * laboratorio deleteMany
   */
  export type laboratorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laboratorios to delete
     */
    where?: laboratorioWhereInput
    /**
     * Limit how many laboratorios to delete.
     */
    limit?: number
  }

  /**
   * laboratorio without action
   */
  export type laboratorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laboratorio
     */
    select?: laboratorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laboratorio
     */
    omit?: laboratorioOmit<ExtArgs> | null
  }


  /**
   * Model modulos
   */

  export type AggregateModulos = {
    _count: ModulosCountAggregateOutputType | null
    _avg: ModulosAvgAggregateOutputType | null
    _sum: ModulosSumAggregateOutputType | null
    _min: ModulosMinAggregateOutputType | null
    _max: ModulosMaxAggregateOutputType | null
  }

  export type ModulosAvgAggregateOutputType = {
    pk_modulos: number | null
  }

  export type ModulosSumAggregateOutputType = {
    pk_modulos: number | null
  }

  export type ModulosMinAggregateOutputType = {
    pk_modulos: number | null
    nombre: string | null
  }

  export type ModulosMaxAggregateOutputType = {
    pk_modulos: number | null
    nombre: string | null
  }

  export type ModulosCountAggregateOutputType = {
    pk_modulos: number
    nombre: number
    _all: number
  }


  export type ModulosAvgAggregateInputType = {
    pk_modulos?: true
  }

  export type ModulosSumAggregateInputType = {
    pk_modulos?: true
  }

  export type ModulosMinAggregateInputType = {
    pk_modulos?: true
    nombre?: true
  }

  export type ModulosMaxAggregateInputType = {
    pk_modulos?: true
    nombre?: true
  }

  export type ModulosCountAggregateInputType = {
    pk_modulos?: true
    nombre?: true
    _all?: true
  }

  export type ModulosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulos to aggregate.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modulos
    **/
    _count?: true | ModulosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModulosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModulosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModulosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModulosMaxAggregateInputType
  }

  export type GetModulosAggregateType<T extends ModulosAggregateArgs> = {
        [P in keyof T & keyof AggregateModulos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulos[P]>
      : GetScalarType<T[P], AggregateModulos[P]>
  }




  export type modulosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulosWhereInput
    orderBy?: modulosOrderByWithAggregationInput | modulosOrderByWithAggregationInput[]
    by: ModulosScalarFieldEnum[] | ModulosScalarFieldEnum
    having?: modulosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModulosCountAggregateInputType | true
    _avg?: ModulosAvgAggregateInputType
    _sum?: ModulosSumAggregateInputType
    _min?: ModulosMinAggregateInputType
    _max?: ModulosMaxAggregateInputType
  }

  export type ModulosGroupByOutputType = {
    pk_modulos: number
    nombre: string | null
    _count: ModulosCountAggregateOutputType | null
    _avg: ModulosAvgAggregateOutputType | null
    _sum: ModulosSumAggregateOutputType | null
    _min: ModulosMinAggregateOutputType | null
    _max: ModulosMaxAggregateOutputType | null
  }

  type GetModulosGroupByPayload<T extends modulosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModulosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModulosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModulosGroupByOutputType[P]>
            : GetScalarType<T[P], ModulosGroupByOutputType[P]>
        }
      >
    >


  export type modulosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_modulos?: boolean
    nombre?: boolean
    acceso?: boolean | modulos$accesoArgs<ExtArgs>
    _count?: boolean | ModulosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulos"]>



  export type modulosSelectScalar = {
    pk_modulos?: boolean
    nombre?: boolean
  }

  export type modulosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_modulos" | "nombre", ExtArgs["result"]["modulos"]>
  export type modulosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceso?: boolean | modulos$accesoArgs<ExtArgs>
    _count?: boolean | ModulosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $modulosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modulos"
    objects: {
      acceso: Prisma.$accesoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_modulos: number
      nombre: string | null
    }, ExtArgs["result"]["modulos"]>
    composites: {}
  }

  type modulosGetPayload<S extends boolean | null | undefined | modulosDefaultArgs> = $Result.GetResult<Prisma.$modulosPayload, S>

  type modulosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modulosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModulosCountAggregateInputType | true
    }

  export interface modulosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modulos'], meta: { name: 'modulos' } }
    /**
     * Find zero or one Modulos that matches the filter.
     * @param {modulosFindUniqueArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modulosFindUniqueArgs>(args: SelectSubset<T, modulosFindUniqueArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modulos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modulosFindUniqueOrThrowArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modulosFindUniqueOrThrowArgs>(args: SelectSubset<T, modulosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosFindFirstArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modulosFindFirstArgs>(args?: SelectSubset<T, modulosFindFirstArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosFindFirstOrThrowArgs} args - Arguments to find a Modulos
     * @example
     * // Get one Modulos
     * const modulos = await prisma.modulos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modulosFindFirstOrThrowArgs>(args?: SelectSubset<T, modulosFindFirstOrThrowArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulos.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulos.findMany({ take: 10 })
     * 
     * // Only select the `pk_modulos`
     * const modulosWithPk_modulosOnly = await prisma.modulos.findMany({ select: { pk_modulos: true } })
     * 
     */
    findMany<T extends modulosFindManyArgs>(args?: SelectSubset<T, modulosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modulos.
     * @param {modulosCreateArgs} args - Arguments to create a Modulos.
     * @example
     * // Create one Modulos
     * const Modulos = await prisma.modulos.create({
     *   data: {
     *     // ... data to create a Modulos
     *   }
     * })
     * 
     */
    create<T extends modulosCreateArgs>(args: SelectSubset<T, modulosCreateArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modulos.
     * @param {modulosCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulos = await prisma.modulos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modulosCreateManyArgs>(args?: SelectSubset<T, modulosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modulos.
     * @param {modulosDeleteArgs} args - Arguments to delete one Modulos.
     * @example
     * // Delete one Modulos
     * const Modulos = await prisma.modulos.delete({
     *   where: {
     *     // ... filter to delete one Modulos
     *   }
     * })
     * 
     */
    delete<T extends modulosDeleteArgs>(args: SelectSubset<T, modulosDeleteArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modulos.
     * @param {modulosUpdateArgs} args - Arguments to update one Modulos.
     * @example
     * // Update one Modulos
     * const modulos = await prisma.modulos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modulosUpdateArgs>(args: SelectSubset<T, modulosUpdateArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modulos.
     * @param {modulosDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modulosDeleteManyArgs>(args?: SelectSubset<T, modulosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulos = await prisma.modulos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modulosUpdateManyArgs>(args: SelectSubset<T, modulosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulos.
     * @param {modulosUpsertArgs} args - Arguments to update or create a Modulos.
     * @example
     * // Update or create a Modulos
     * const modulos = await prisma.modulos.upsert({
     *   create: {
     *     // ... data to create a Modulos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulos we want to update
     *   }
     * })
     */
    upsert<T extends modulosUpsertArgs>(args: SelectSubset<T, modulosUpsertArgs<ExtArgs>>): Prisma__modulosClient<$Result.GetResult<Prisma.$modulosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulos.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends modulosCountArgs>(
      args?: Subset<T, modulosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModulosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModulosAggregateArgs>(args: Subset<T, ModulosAggregateArgs>): Prisma.PrismaPromise<GetModulosAggregateType<T>>

    /**
     * Group by Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulosGroupByArgs} args - Group by arguments.
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
      T extends modulosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modulosGroupByArgs['orderBy'] }
        : { orderBy?: modulosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modulosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modulos model
   */
  readonly fields: modulosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modulos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modulosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    acceso<T extends modulos$accesoArgs<ExtArgs> = {}>(args?: Subset<T, modulos$accesoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the modulos model
   */
  interface modulosFieldRefs {
    readonly pk_modulos: FieldRef<"modulos", 'Int'>
    readonly nombre: FieldRef<"modulos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * modulos findUnique
   */
  export type modulosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where: modulosWhereUniqueInput
  }

  /**
   * modulos findUniqueOrThrow
   */
  export type modulosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where: modulosWhereUniqueInput
  }

  /**
   * modulos findFirst
   */
  export type modulosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulos.
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulos.
     */
    distinct?: ModulosScalarFieldEnum | ModulosScalarFieldEnum[]
  }

  /**
   * modulos findFirstOrThrow
   */
  export type modulosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modulos.
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modulos.
     */
    distinct?: ModulosScalarFieldEnum | ModulosScalarFieldEnum[]
  }

  /**
   * modulos findMany
   */
  export type modulosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * Filter, which modulos to fetch.
     */
    where?: modulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modulos to fetch.
     */
    orderBy?: modulosOrderByWithRelationInput | modulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modulos.
     */
    cursor?: modulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modulos.
     */
    skip?: number
    distinct?: ModulosScalarFieldEnum | ModulosScalarFieldEnum[]
  }

  /**
   * modulos create
   */
  export type modulosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * The data needed to create a modulos.
     */
    data: XOR<modulosCreateInput, modulosUncheckedCreateInput>
  }

  /**
   * modulos createMany
   */
  export type modulosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modulos.
     */
    data: modulosCreateManyInput | modulosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modulos update
   */
  export type modulosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * The data needed to update a modulos.
     */
    data: XOR<modulosUpdateInput, modulosUncheckedUpdateInput>
    /**
     * Choose, which modulos to update.
     */
    where: modulosWhereUniqueInput
  }

  /**
   * modulos updateMany
   */
  export type modulosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modulos.
     */
    data: XOR<modulosUpdateManyMutationInput, modulosUncheckedUpdateManyInput>
    /**
     * Filter which modulos to update
     */
    where?: modulosWhereInput
    /**
     * Limit how many modulos to update.
     */
    limit?: number
  }

  /**
   * modulos upsert
   */
  export type modulosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * The filter to search for the modulos to update in case it exists.
     */
    where: modulosWhereUniqueInput
    /**
     * In case the modulos found by the `where` argument doesn't exist, create a new modulos with this data.
     */
    create: XOR<modulosCreateInput, modulosUncheckedCreateInput>
    /**
     * In case the modulos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modulosUpdateInput, modulosUncheckedUpdateInput>
  }

  /**
   * modulos delete
   */
  export type modulosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
    /**
     * Filter which modulos to delete.
     */
    where: modulosWhereUniqueInput
  }

  /**
   * modulos deleteMany
   */
  export type modulosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modulos to delete
     */
    where?: modulosWhereInput
    /**
     * Limit how many modulos to delete.
     */
    limit?: number
  }

  /**
   * modulos.acceso
   */
  export type modulos$accesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acceso
     */
    select?: accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acceso
     */
    omit?: accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoInclude<ExtArgs> | null
    where?: accesoWhereInput
    orderBy?: accesoOrderByWithRelationInput | accesoOrderByWithRelationInput[]
    cursor?: accesoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccesoScalarFieldEnum | AccesoScalarFieldEnum[]
  }

  /**
   * modulos without action
   */
  export type modulosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modulos
     */
    select?: modulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modulos
     */
    omit?: modulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modulosInclude<ExtArgs> | null
  }


  /**
   * Model mov_asig_au
   */

  export type AggregateMov_asig_au = {
    _count: Mov_asig_auCountAggregateOutputType | null
    _avg: Mov_asig_auAvgAggregateOutputType | null
    _sum: Mov_asig_auSumAggregateOutputType | null
    _min: Mov_asig_auMinAggregateOutputType | null
    _max: Mov_asig_auMaxAggregateOutputType | null
  }

  export type Mov_asig_auAvgAggregateOutputType = {
    pk_mov: number | null
    fk_asignatura: number | null
    fk_aula: number | null
    fk_horario: number | null
  }

  export type Mov_asig_auSumAggregateOutputType = {
    pk_mov: number | null
    fk_asignatura: number | null
    fk_aula: number | null
    fk_horario: number | null
  }

  export type Mov_asig_auMinAggregateOutputType = {
    pk_mov: number | null
    fk_asignatura: number | null
    fk_aula: number | null
    fk_horario: number | null
  }

  export type Mov_asig_auMaxAggregateOutputType = {
    pk_mov: number | null
    fk_asignatura: number | null
    fk_aula: number | null
    fk_horario: number | null
  }

  export type Mov_asig_auCountAggregateOutputType = {
    pk_mov: number
    fk_asignatura: number
    fk_aula: number
    fk_horario: number
    _all: number
  }


  export type Mov_asig_auAvgAggregateInputType = {
    pk_mov?: true
    fk_asignatura?: true
    fk_aula?: true
    fk_horario?: true
  }

  export type Mov_asig_auSumAggregateInputType = {
    pk_mov?: true
    fk_asignatura?: true
    fk_aula?: true
    fk_horario?: true
  }

  export type Mov_asig_auMinAggregateInputType = {
    pk_mov?: true
    fk_asignatura?: true
    fk_aula?: true
    fk_horario?: true
  }

  export type Mov_asig_auMaxAggregateInputType = {
    pk_mov?: true
    fk_asignatura?: true
    fk_aula?: true
    fk_horario?: true
  }

  export type Mov_asig_auCountAggregateInputType = {
    pk_mov?: true
    fk_asignatura?: true
    fk_aula?: true
    fk_horario?: true
    _all?: true
  }

  export type Mov_asig_auAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mov_asig_au to aggregate.
     */
    where?: mov_asig_auWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mov_asig_aus to fetch.
     */
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mov_asig_auWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mov_asig_aus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mov_asig_aus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mov_asig_aus
    **/
    _count?: true | Mov_asig_auCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mov_asig_auAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mov_asig_auSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mov_asig_auMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mov_asig_auMaxAggregateInputType
  }

  export type GetMov_asig_auAggregateType<T extends Mov_asig_auAggregateArgs> = {
        [P in keyof T & keyof AggregateMov_asig_au]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMov_asig_au[P]>
      : GetScalarType<T[P], AggregateMov_asig_au[P]>
  }




  export type mov_asig_auGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mov_asig_auWhereInput
    orderBy?: mov_asig_auOrderByWithAggregationInput | mov_asig_auOrderByWithAggregationInput[]
    by: Mov_asig_auScalarFieldEnum[] | Mov_asig_auScalarFieldEnum
    having?: mov_asig_auScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mov_asig_auCountAggregateInputType | true
    _avg?: Mov_asig_auAvgAggregateInputType
    _sum?: Mov_asig_auSumAggregateInputType
    _min?: Mov_asig_auMinAggregateInputType
    _max?: Mov_asig_auMaxAggregateInputType
  }

  export type Mov_asig_auGroupByOutputType = {
    pk_mov: number
    fk_asignatura: number | null
    fk_aula: number | null
    fk_horario: number | null
    _count: Mov_asig_auCountAggregateOutputType | null
    _avg: Mov_asig_auAvgAggregateOutputType | null
    _sum: Mov_asig_auSumAggregateOutputType | null
    _min: Mov_asig_auMinAggregateOutputType | null
    _max: Mov_asig_auMaxAggregateOutputType | null
  }

  type GetMov_asig_auGroupByPayload<T extends mov_asig_auGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mov_asig_auGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mov_asig_auGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mov_asig_auGroupByOutputType[P]>
            : GetScalarType<T[P], Mov_asig_auGroupByOutputType[P]>
        }
      >
    >


  export type mov_asig_auSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_mov?: boolean
    fk_asignatura?: boolean
    fk_aula?: boolean
    fk_horario?: boolean
    asignaturas?: boolean | mov_asig_au$asignaturasArgs<ExtArgs>
    aulas?: boolean | mov_asig_au$aulasArgs<ExtArgs>
    horarios?: boolean | mov_asig_au$horariosArgs<ExtArgs>
  }, ExtArgs["result"]["mov_asig_au"]>



  export type mov_asig_auSelectScalar = {
    pk_mov?: boolean
    fk_asignatura?: boolean
    fk_aula?: boolean
    fk_horario?: boolean
  }

  export type mov_asig_auOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_mov" | "fk_asignatura" | "fk_aula" | "fk_horario", ExtArgs["result"]["mov_asig_au"]>
  export type mov_asig_auInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignaturas?: boolean | mov_asig_au$asignaturasArgs<ExtArgs>
    aulas?: boolean | mov_asig_au$aulasArgs<ExtArgs>
    horarios?: boolean | mov_asig_au$horariosArgs<ExtArgs>
  }

  export type $mov_asig_auPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mov_asig_au"
    objects: {
      asignaturas: Prisma.$asignaturasPayload<ExtArgs> | null
      aulas: Prisma.$aulasPayload<ExtArgs> | null
      horarios: Prisma.$horariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_mov: number
      fk_asignatura: number | null
      fk_aula: number | null
      fk_horario: number | null
    }, ExtArgs["result"]["mov_asig_au"]>
    composites: {}
  }

  type mov_asig_auGetPayload<S extends boolean | null | undefined | mov_asig_auDefaultArgs> = $Result.GetResult<Prisma.$mov_asig_auPayload, S>

  type mov_asig_auCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mov_asig_auFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mov_asig_auCountAggregateInputType | true
    }

  export interface mov_asig_auDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mov_asig_au'], meta: { name: 'mov_asig_au' } }
    /**
     * Find zero or one Mov_asig_au that matches the filter.
     * @param {mov_asig_auFindUniqueArgs} args - Arguments to find a Mov_asig_au
     * @example
     * // Get one Mov_asig_au
     * const mov_asig_au = await prisma.mov_asig_au.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mov_asig_auFindUniqueArgs>(args: SelectSubset<T, mov_asig_auFindUniqueArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mov_asig_au that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mov_asig_auFindUniqueOrThrowArgs} args - Arguments to find a Mov_asig_au
     * @example
     * // Get one Mov_asig_au
     * const mov_asig_au = await prisma.mov_asig_au.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mov_asig_auFindUniqueOrThrowArgs>(args: SelectSubset<T, mov_asig_auFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mov_asig_au that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mov_asig_auFindFirstArgs} args - Arguments to find a Mov_asig_au
     * @example
     * // Get one Mov_asig_au
     * const mov_asig_au = await prisma.mov_asig_au.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mov_asig_auFindFirstArgs>(args?: SelectSubset<T, mov_asig_auFindFirstArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mov_asig_au that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mov_asig_auFindFirstOrThrowArgs} args - Arguments to find a Mov_asig_au
     * @example
     * // Get one Mov_asig_au
     * const mov_asig_au = await prisma.mov_asig_au.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mov_asig_auFindFirstOrThrowArgs>(args?: SelectSubset<T, mov_asig_auFindFirstOrThrowArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mov_asig_aus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mov_asig_auFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mov_asig_aus
     * const mov_asig_aus = await prisma.mov_asig_au.findMany()
     * 
     * // Get first 10 Mov_asig_aus
     * const mov_asig_aus = await prisma.mov_asig_au.findMany({ take: 10 })
     * 
     * // Only select the `pk_mov`
     * const mov_asig_auWithPk_movOnly = await prisma.mov_asig_au.findMany({ select: { pk_mov: true } })
     * 
     */
    findMany<T extends mov_asig_auFindManyArgs>(args?: SelectSubset<T, mov_asig_auFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mov_asig_au.
     * @param {mov_asig_auCreateArgs} args - Arguments to create a Mov_asig_au.
     * @example
     * // Create one Mov_asig_au
     * const Mov_asig_au = await prisma.mov_asig_au.create({
     *   data: {
     *     // ... data to create a Mov_asig_au
     *   }
     * })
     * 
     */
    create<T extends mov_asig_auCreateArgs>(args: SelectSubset<T, mov_asig_auCreateArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mov_asig_aus.
     * @param {mov_asig_auCreateManyArgs} args - Arguments to create many Mov_asig_aus.
     * @example
     * // Create many Mov_asig_aus
     * const mov_asig_au = await prisma.mov_asig_au.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mov_asig_auCreateManyArgs>(args?: SelectSubset<T, mov_asig_auCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mov_asig_au.
     * @param {mov_asig_auDeleteArgs} args - Arguments to delete one Mov_asig_au.
     * @example
     * // Delete one Mov_asig_au
     * const Mov_asig_au = await prisma.mov_asig_au.delete({
     *   where: {
     *     // ... filter to delete one Mov_asig_au
     *   }
     * })
     * 
     */
    delete<T extends mov_asig_auDeleteArgs>(args: SelectSubset<T, mov_asig_auDeleteArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mov_asig_au.
     * @param {mov_asig_auUpdateArgs} args - Arguments to update one Mov_asig_au.
     * @example
     * // Update one Mov_asig_au
     * const mov_asig_au = await prisma.mov_asig_au.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mov_asig_auUpdateArgs>(args: SelectSubset<T, mov_asig_auUpdateArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mov_asig_aus.
     * @param {mov_asig_auDeleteManyArgs} args - Arguments to filter Mov_asig_aus to delete.
     * @example
     * // Delete a few Mov_asig_aus
     * const { count } = await prisma.mov_asig_au.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mov_asig_auDeleteManyArgs>(args?: SelectSubset<T, mov_asig_auDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mov_asig_aus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mov_asig_auUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mov_asig_aus
     * const mov_asig_au = await prisma.mov_asig_au.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mov_asig_auUpdateManyArgs>(args: SelectSubset<T, mov_asig_auUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mov_asig_au.
     * @param {mov_asig_auUpsertArgs} args - Arguments to update or create a Mov_asig_au.
     * @example
     * // Update or create a Mov_asig_au
     * const mov_asig_au = await prisma.mov_asig_au.upsert({
     *   create: {
     *     // ... data to create a Mov_asig_au
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mov_asig_au we want to update
     *   }
     * })
     */
    upsert<T extends mov_asig_auUpsertArgs>(args: SelectSubset<T, mov_asig_auUpsertArgs<ExtArgs>>): Prisma__mov_asig_auClient<$Result.GetResult<Prisma.$mov_asig_auPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mov_asig_aus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mov_asig_auCountArgs} args - Arguments to filter Mov_asig_aus to count.
     * @example
     * // Count the number of Mov_asig_aus
     * const count = await prisma.mov_asig_au.count({
     *   where: {
     *     // ... the filter for the Mov_asig_aus we want to count
     *   }
     * })
    **/
    count<T extends mov_asig_auCountArgs>(
      args?: Subset<T, mov_asig_auCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mov_asig_auCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mov_asig_au.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mov_asig_auAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mov_asig_auAggregateArgs>(args: Subset<T, Mov_asig_auAggregateArgs>): Prisma.PrismaPromise<GetMov_asig_auAggregateType<T>>

    /**
     * Group by Mov_asig_au.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mov_asig_auGroupByArgs} args - Group by arguments.
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
      T extends mov_asig_auGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mov_asig_auGroupByArgs['orderBy'] }
        : { orderBy?: mov_asig_auGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mov_asig_auGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMov_asig_auGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mov_asig_au model
   */
  readonly fields: mov_asig_auFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mov_asig_au.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mov_asig_auClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asignaturas<T extends mov_asig_au$asignaturasArgs<ExtArgs> = {}>(args?: Subset<T, mov_asig_au$asignaturasArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aulas<T extends mov_asig_au$aulasArgs<ExtArgs> = {}>(args?: Subset<T, mov_asig_au$aulasArgs<ExtArgs>>): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    horarios<T extends mov_asig_au$horariosArgs<ExtArgs> = {}>(args?: Subset<T, mov_asig_au$horariosArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mov_asig_au model
   */
  interface mov_asig_auFieldRefs {
    readonly pk_mov: FieldRef<"mov_asig_au", 'Int'>
    readonly fk_asignatura: FieldRef<"mov_asig_au", 'Int'>
    readonly fk_aula: FieldRef<"mov_asig_au", 'Int'>
    readonly fk_horario: FieldRef<"mov_asig_au", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mov_asig_au findUnique
   */
  export type mov_asig_auFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * Filter, which mov_asig_au to fetch.
     */
    where: mov_asig_auWhereUniqueInput
  }

  /**
   * mov_asig_au findUniqueOrThrow
   */
  export type mov_asig_auFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * Filter, which mov_asig_au to fetch.
     */
    where: mov_asig_auWhereUniqueInput
  }

  /**
   * mov_asig_au findFirst
   */
  export type mov_asig_auFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * Filter, which mov_asig_au to fetch.
     */
    where?: mov_asig_auWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mov_asig_aus to fetch.
     */
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mov_asig_aus.
     */
    cursor?: mov_asig_auWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mov_asig_aus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mov_asig_aus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mov_asig_aus.
     */
    distinct?: Mov_asig_auScalarFieldEnum | Mov_asig_auScalarFieldEnum[]
  }

  /**
   * mov_asig_au findFirstOrThrow
   */
  export type mov_asig_auFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * Filter, which mov_asig_au to fetch.
     */
    where?: mov_asig_auWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mov_asig_aus to fetch.
     */
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mov_asig_aus.
     */
    cursor?: mov_asig_auWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mov_asig_aus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mov_asig_aus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mov_asig_aus.
     */
    distinct?: Mov_asig_auScalarFieldEnum | Mov_asig_auScalarFieldEnum[]
  }

  /**
   * mov_asig_au findMany
   */
  export type mov_asig_auFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * Filter, which mov_asig_aus to fetch.
     */
    where?: mov_asig_auWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mov_asig_aus to fetch.
     */
    orderBy?: mov_asig_auOrderByWithRelationInput | mov_asig_auOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mov_asig_aus.
     */
    cursor?: mov_asig_auWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mov_asig_aus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mov_asig_aus.
     */
    skip?: number
    distinct?: Mov_asig_auScalarFieldEnum | Mov_asig_auScalarFieldEnum[]
  }

  /**
   * mov_asig_au create
   */
  export type mov_asig_auCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * The data needed to create a mov_asig_au.
     */
    data?: XOR<mov_asig_auCreateInput, mov_asig_auUncheckedCreateInput>
  }

  /**
   * mov_asig_au createMany
   */
  export type mov_asig_auCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mov_asig_aus.
     */
    data: mov_asig_auCreateManyInput | mov_asig_auCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mov_asig_au update
   */
  export type mov_asig_auUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * The data needed to update a mov_asig_au.
     */
    data: XOR<mov_asig_auUpdateInput, mov_asig_auUncheckedUpdateInput>
    /**
     * Choose, which mov_asig_au to update.
     */
    where: mov_asig_auWhereUniqueInput
  }

  /**
   * mov_asig_au updateMany
   */
  export type mov_asig_auUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mov_asig_aus.
     */
    data: XOR<mov_asig_auUpdateManyMutationInput, mov_asig_auUncheckedUpdateManyInput>
    /**
     * Filter which mov_asig_aus to update
     */
    where?: mov_asig_auWhereInput
    /**
     * Limit how many mov_asig_aus to update.
     */
    limit?: number
  }

  /**
   * mov_asig_au upsert
   */
  export type mov_asig_auUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * The filter to search for the mov_asig_au to update in case it exists.
     */
    where: mov_asig_auWhereUniqueInput
    /**
     * In case the mov_asig_au found by the `where` argument doesn't exist, create a new mov_asig_au with this data.
     */
    create: XOR<mov_asig_auCreateInput, mov_asig_auUncheckedCreateInput>
    /**
     * In case the mov_asig_au was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mov_asig_auUpdateInput, mov_asig_auUncheckedUpdateInput>
  }

  /**
   * mov_asig_au delete
   */
  export type mov_asig_auDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
    /**
     * Filter which mov_asig_au to delete.
     */
    where: mov_asig_auWhereUniqueInput
  }

  /**
   * mov_asig_au deleteMany
   */
  export type mov_asig_auDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mov_asig_aus to delete
     */
    where?: mov_asig_auWhereInput
    /**
     * Limit how many mov_asig_aus to delete.
     */
    limit?: number
  }

  /**
   * mov_asig_au.asignaturas
   */
  export type mov_asig_au$asignaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    where?: asignaturasWhereInput
  }

  /**
   * mov_asig_au.aulas
   */
  export type mov_asig_au$aulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aulas
     */
    omit?: aulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aulasInclude<ExtArgs> | null
    where?: aulasWhereInput
  }

  /**
   * mov_asig_au.horarios
   */
  export type mov_asig_au$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    where?: horariosWhereInput
  }

  /**
   * mov_asig_au without action
   */
  export type mov_asig_auDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mov_asig_au
     */
    select?: mov_asig_auSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mov_asig_au
     */
    omit?: mov_asig_auOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mov_asig_auInclude<ExtArgs> | null
  }


  /**
   * Model pregrado
   */

  export type AggregatePregrado = {
    _count: PregradoCountAggregateOutputType | null
    _avg: PregradoAvgAggregateOutputType | null
    _sum: PregradoSumAggregateOutputType | null
    _min: PregradoMinAggregateOutputType | null
    _max: PregradoMaxAggregateOutputType | null
  }

  export type PregradoAvgAggregateOutputType = {
    pk_pregrado: number | null
  }

  export type PregradoSumAggregateOutputType = {
    pk_pregrado: number | null
  }

  export type PregradoMinAggregateOutputType = {
    pk_pregrado: number | null
    nombre_pregrado: string | null
  }

  export type PregradoMaxAggregateOutputType = {
    pk_pregrado: number | null
    nombre_pregrado: string | null
  }

  export type PregradoCountAggregateOutputType = {
    pk_pregrado: number
    nombre_pregrado: number
    _all: number
  }


  export type PregradoAvgAggregateInputType = {
    pk_pregrado?: true
  }

  export type PregradoSumAggregateInputType = {
    pk_pregrado?: true
  }

  export type PregradoMinAggregateInputType = {
    pk_pregrado?: true
    nombre_pregrado?: true
  }

  export type PregradoMaxAggregateInputType = {
    pk_pregrado?: true
    nombre_pregrado?: true
  }

  export type PregradoCountAggregateInputType = {
    pk_pregrado?: true
    nombre_pregrado?: true
    _all?: true
  }

  export type PregradoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pregrado to aggregate.
     */
    where?: pregradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pregrados to fetch.
     */
    orderBy?: pregradoOrderByWithRelationInput | pregradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pregradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pregrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pregrados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pregrados
    **/
    _count?: true | PregradoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PregradoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PregradoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PregradoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PregradoMaxAggregateInputType
  }

  export type GetPregradoAggregateType<T extends PregradoAggregateArgs> = {
        [P in keyof T & keyof AggregatePregrado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePregrado[P]>
      : GetScalarType<T[P], AggregatePregrado[P]>
  }




  export type pregradoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pregradoWhereInput
    orderBy?: pregradoOrderByWithAggregationInput | pregradoOrderByWithAggregationInput[]
    by: PregradoScalarFieldEnum[] | PregradoScalarFieldEnum
    having?: pregradoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PregradoCountAggregateInputType | true
    _avg?: PregradoAvgAggregateInputType
    _sum?: PregradoSumAggregateInputType
    _min?: PregradoMinAggregateInputType
    _max?: PregradoMaxAggregateInputType
  }

  export type PregradoGroupByOutputType = {
    pk_pregrado: number
    nombre_pregrado: string | null
    _count: PregradoCountAggregateOutputType | null
    _avg: PregradoAvgAggregateOutputType | null
    _sum: PregradoSumAggregateOutputType | null
    _min: PregradoMinAggregateOutputType | null
    _max: PregradoMaxAggregateOutputType | null
  }

  type GetPregradoGroupByPayload<T extends pregradoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PregradoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PregradoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PregradoGroupByOutputType[P]>
            : GetScalarType<T[P], PregradoGroupByOutputType[P]>
        }
      >
    >


  export type pregradoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_pregrado?: boolean
    nombre_pregrado?: boolean
    preofe_mate?: boolean | pregrado$preofe_mateArgs<ExtArgs>
    semestre?: boolean | pregrado$semestreArgs<ExtArgs>
    datos?: boolean | pregrado$datosArgs<ExtArgs>
    _count?: boolean | PregradoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pregrado"]>



  export type pregradoSelectScalar = {
    pk_pregrado?: boolean
    nombre_pregrado?: boolean
  }

  export type pregradoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_pregrado" | "nombre_pregrado", ExtArgs["result"]["pregrado"]>
  export type pregradoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preofe_mate?: boolean | pregrado$preofe_mateArgs<ExtArgs>
    semestre?: boolean | pregrado$semestreArgs<ExtArgs>
    datos?: boolean | pregrado$datosArgs<ExtArgs>
    _count?: boolean | PregradoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pregradoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pregrado"
    objects: {
      preofe_mate: Prisma.$preofe_matePayload<ExtArgs>[]
      semestre: Prisma.$semestrePayload<ExtArgs>[]
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_pregrado: number
      nombre_pregrado: string | null
    }, ExtArgs["result"]["pregrado"]>
    composites: {}
  }

  type pregradoGetPayload<S extends boolean | null | undefined | pregradoDefaultArgs> = $Result.GetResult<Prisma.$pregradoPayload, S>

  type pregradoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pregradoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PregradoCountAggregateInputType | true
    }

  export interface pregradoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pregrado'], meta: { name: 'pregrado' } }
    /**
     * Find zero or one Pregrado that matches the filter.
     * @param {pregradoFindUniqueArgs} args - Arguments to find a Pregrado
     * @example
     * // Get one Pregrado
     * const pregrado = await prisma.pregrado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pregradoFindUniqueArgs>(args: SelectSubset<T, pregradoFindUniqueArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pregrado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pregradoFindUniqueOrThrowArgs} args - Arguments to find a Pregrado
     * @example
     * // Get one Pregrado
     * const pregrado = await prisma.pregrado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pregradoFindUniqueOrThrowArgs>(args: SelectSubset<T, pregradoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pregrado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pregradoFindFirstArgs} args - Arguments to find a Pregrado
     * @example
     * // Get one Pregrado
     * const pregrado = await prisma.pregrado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pregradoFindFirstArgs>(args?: SelectSubset<T, pregradoFindFirstArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pregrado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pregradoFindFirstOrThrowArgs} args - Arguments to find a Pregrado
     * @example
     * // Get one Pregrado
     * const pregrado = await prisma.pregrado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pregradoFindFirstOrThrowArgs>(args?: SelectSubset<T, pregradoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pregrados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pregradoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pregrados
     * const pregrados = await prisma.pregrado.findMany()
     * 
     * // Get first 10 Pregrados
     * const pregrados = await prisma.pregrado.findMany({ take: 10 })
     * 
     * // Only select the `pk_pregrado`
     * const pregradoWithPk_pregradoOnly = await prisma.pregrado.findMany({ select: { pk_pregrado: true } })
     * 
     */
    findMany<T extends pregradoFindManyArgs>(args?: SelectSubset<T, pregradoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pregrado.
     * @param {pregradoCreateArgs} args - Arguments to create a Pregrado.
     * @example
     * // Create one Pregrado
     * const Pregrado = await prisma.pregrado.create({
     *   data: {
     *     // ... data to create a Pregrado
     *   }
     * })
     * 
     */
    create<T extends pregradoCreateArgs>(args: SelectSubset<T, pregradoCreateArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pregrados.
     * @param {pregradoCreateManyArgs} args - Arguments to create many Pregrados.
     * @example
     * // Create many Pregrados
     * const pregrado = await prisma.pregrado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pregradoCreateManyArgs>(args?: SelectSubset<T, pregradoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pregrado.
     * @param {pregradoDeleteArgs} args - Arguments to delete one Pregrado.
     * @example
     * // Delete one Pregrado
     * const Pregrado = await prisma.pregrado.delete({
     *   where: {
     *     // ... filter to delete one Pregrado
     *   }
     * })
     * 
     */
    delete<T extends pregradoDeleteArgs>(args: SelectSubset<T, pregradoDeleteArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pregrado.
     * @param {pregradoUpdateArgs} args - Arguments to update one Pregrado.
     * @example
     * // Update one Pregrado
     * const pregrado = await prisma.pregrado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pregradoUpdateArgs>(args: SelectSubset<T, pregradoUpdateArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pregrados.
     * @param {pregradoDeleteManyArgs} args - Arguments to filter Pregrados to delete.
     * @example
     * // Delete a few Pregrados
     * const { count } = await prisma.pregrado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pregradoDeleteManyArgs>(args?: SelectSubset<T, pregradoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pregrados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pregradoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pregrados
     * const pregrado = await prisma.pregrado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pregradoUpdateManyArgs>(args: SelectSubset<T, pregradoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pregrado.
     * @param {pregradoUpsertArgs} args - Arguments to update or create a Pregrado.
     * @example
     * // Update or create a Pregrado
     * const pregrado = await prisma.pregrado.upsert({
     *   create: {
     *     // ... data to create a Pregrado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pregrado we want to update
     *   }
     * })
     */
    upsert<T extends pregradoUpsertArgs>(args: SelectSubset<T, pregradoUpsertArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pregrados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pregradoCountArgs} args - Arguments to filter Pregrados to count.
     * @example
     * // Count the number of Pregrados
     * const count = await prisma.pregrado.count({
     *   where: {
     *     // ... the filter for the Pregrados we want to count
     *   }
     * })
    **/
    count<T extends pregradoCountArgs>(
      args?: Subset<T, pregradoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PregradoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pregrado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PregradoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PregradoAggregateArgs>(args: Subset<T, PregradoAggregateArgs>): Prisma.PrismaPromise<GetPregradoAggregateType<T>>

    /**
     * Group by Pregrado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pregradoGroupByArgs} args - Group by arguments.
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
      T extends pregradoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pregradoGroupByArgs['orderBy'] }
        : { orderBy?: pregradoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pregradoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPregradoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pregrado model
   */
  readonly fields: pregradoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pregrado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pregradoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preofe_mate<T extends pregrado$preofe_mateArgs<ExtArgs> = {}>(args?: Subset<T, pregrado$preofe_mateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    semestre<T extends pregrado$semestreArgs<ExtArgs> = {}>(args?: Subset<T, pregrado$semestreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    datos<T extends pregrado$datosArgs<ExtArgs> = {}>(args?: Subset<T, pregrado$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pregrado model
   */
  interface pregradoFieldRefs {
    readonly pk_pregrado: FieldRef<"pregrado", 'Int'>
    readonly nombre_pregrado: FieldRef<"pregrado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pregrado findUnique
   */
  export type pregradoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * Filter, which pregrado to fetch.
     */
    where: pregradoWhereUniqueInput
  }

  /**
   * pregrado findUniqueOrThrow
   */
  export type pregradoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * Filter, which pregrado to fetch.
     */
    where: pregradoWhereUniqueInput
  }

  /**
   * pregrado findFirst
   */
  export type pregradoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * Filter, which pregrado to fetch.
     */
    where?: pregradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pregrados to fetch.
     */
    orderBy?: pregradoOrderByWithRelationInput | pregradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pregrados.
     */
    cursor?: pregradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pregrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pregrados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pregrados.
     */
    distinct?: PregradoScalarFieldEnum | PregradoScalarFieldEnum[]
  }

  /**
   * pregrado findFirstOrThrow
   */
  export type pregradoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * Filter, which pregrado to fetch.
     */
    where?: pregradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pregrados to fetch.
     */
    orderBy?: pregradoOrderByWithRelationInput | pregradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pregrados.
     */
    cursor?: pregradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pregrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pregrados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pregrados.
     */
    distinct?: PregradoScalarFieldEnum | PregradoScalarFieldEnum[]
  }

  /**
   * pregrado findMany
   */
  export type pregradoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * Filter, which pregrados to fetch.
     */
    where?: pregradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pregrados to fetch.
     */
    orderBy?: pregradoOrderByWithRelationInput | pregradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pregrados.
     */
    cursor?: pregradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pregrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pregrados.
     */
    skip?: number
    distinct?: PregradoScalarFieldEnum | PregradoScalarFieldEnum[]
  }

  /**
   * pregrado create
   */
  export type pregradoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * The data needed to create a pregrado.
     */
    data?: XOR<pregradoCreateInput, pregradoUncheckedCreateInput>
  }

  /**
   * pregrado createMany
   */
  export type pregradoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pregrados.
     */
    data: pregradoCreateManyInput | pregradoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pregrado update
   */
  export type pregradoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * The data needed to update a pregrado.
     */
    data: XOR<pregradoUpdateInput, pregradoUncheckedUpdateInput>
    /**
     * Choose, which pregrado to update.
     */
    where: pregradoWhereUniqueInput
  }

  /**
   * pregrado updateMany
   */
  export type pregradoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pregrados.
     */
    data: XOR<pregradoUpdateManyMutationInput, pregradoUncheckedUpdateManyInput>
    /**
     * Filter which pregrados to update
     */
    where?: pregradoWhereInput
    /**
     * Limit how many pregrados to update.
     */
    limit?: number
  }

  /**
   * pregrado upsert
   */
  export type pregradoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * The filter to search for the pregrado to update in case it exists.
     */
    where: pregradoWhereUniqueInput
    /**
     * In case the pregrado found by the `where` argument doesn't exist, create a new pregrado with this data.
     */
    create: XOR<pregradoCreateInput, pregradoUncheckedCreateInput>
    /**
     * In case the pregrado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pregradoUpdateInput, pregradoUncheckedUpdateInput>
  }

  /**
   * pregrado delete
   */
  export type pregradoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    /**
     * Filter which pregrado to delete.
     */
    where: pregradoWhereUniqueInput
  }

  /**
   * pregrado deleteMany
   */
  export type pregradoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pregrados to delete
     */
    where?: pregradoWhereInput
    /**
     * Limit how many pregrados to delete.
     */
    limit?: number
  }

  /**
   * pregrado.preofe_mate
   */
  export type pregrado$preofe_mateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    where?: preofe_mateWhereInput
    orderBy?: preofe_mateOrderByWithRelationInput | preofe_mateOrderByWithRelationInput[]
    cursor?: preofe_mateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Preofe_mateScalarFieldEnum | Preofe_mateScalarFieldEnum[]
  }

  /**
   * pregrado.semestre
   */
  export type pregrado$semestreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    where?: semestreWhereInput
    orderBy?: semestreOrderByWithRelationInput | semestreOrderByWithRelationInput[]
    cursor?: semestreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SemestreScalarFieldEnum | SemestreScalarFieldEnum[]
  }

  /**
   * pregrado.datos
   */
  export type pregrado$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * pregrado without action
   */
  export type pregradoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
  }


  /**
   * Model preofe_mate
   */

  export type AggregatePreofe_mate = {
    _count: Preofe_mateCountAggregateOutputType | null
    _avg: Preofe_mateAvgAggregateOutputType | null
    _sum: Preofe_mateSumAggregateOutputType | null
    _min: Preofe_mateMinAggregateOutputType | null
    _max: Preofe_mateMaxAggregateOutputType | null
  }

  export type Preofe_mateAvgAggregateOutputType = {
    pk_preofe: number | null
    fk_pregrado: number | null
    fk_asignatura: number | null
  }

  export type Preofe_mateSumAggregateOutputType = {
    pk_preofe: number | null
    fk_pregrado: number | null
    fk_asignatura: number | null
  }

  export type Preofe_mateMinAggregateOutputType = {
    pk_preofe: number | null
    fk_pregrado: number | null
    fk_asignatura: number | null
  }

  export type Preofe_mateMaxAggregateOutputType = {
    pk_preofe: number | null
    fk_pregrado: number | null
    fk_asignatura: number | null
  }

  export type Preofe_mateCountAggregateOutputType = {
    pk_preofe: number
    fk_pregrado: number
    fk_asignatura: number
    _all: number
  }


  export type Preofe_mateAvgAggregateInputType = {
    pk_preofe?: true
    fk_pregrado?: true
    fk_asignatura?: true
  }

  export type Preofe_mateSumAggregateInputType = {
    pk_preofe?: true
    fk_pregrado?: true
    fk_asignatura?: true
  }

  export type Preofe_mateMinAggregateInputType = {
    pk_preofe?: true
    fk_pregrado?: true
    fk_asignatura?: true
  }

  export type Preofe_mateMaxAggregateInputType = {
    pk_preofe?: true
    fk_pregrado?: true
    fk_asignatura?: true
  }

  export type Preofe_mateCountAggregateInputType = {
    pk_preofe?: true
    fk_pregrado?: true
    fk_asignatura?: true
    _all?: true
  }

  export type Preofe_mateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preofe_mate to aggregate.
     */
    where?: preofe_mateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preofe_mates to fetch.
     */
    orderBy?: preofe_mateOrderByWithRelationInput | preofe_mateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preofe_mateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preofe_mates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preofe_mates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned preofe_mates
    **/
    _count?: true | Preofe_mateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Preofe_mateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Preofe_mateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Preofe_mateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Preofe_mateMaxAggregateInputType
  }

  export type GetPreofe_mateAggregateType<T extends Preofe_mateAggregateArgs> = {
        [P in keyof T & keyof AggregatePreofe_mate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreofe_mate[P]>
      : GetScalarType<T[P], AggregatePreofe_mate[P]>
  }




  export type preofe_mateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preofe_mateWhereInput
    orderBy?: preofe_mateOrderByWithAggregationInput | preofe_mateOrderByWithAggregationInput[]
    by: Preofe_mateScalarFieldEnum[] | Preofe_mateScalarFieldEnum
    having?: preofe_mateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Preofe_mateCountAggregateInputType | true
    _avg?: Preofe_mateAvgAggregateInputType
    _sum?: Preofe_mateSumAggregateInputType
    _min?: Preofe_mateMinAggregateInputType
    _max?: Preofe_mateMaxAggregateInputType
  }

  export type Preofe_mateGroupByOutputType = {
    pk_preofe: number
    fk_pregrado: number | null
    fk_asignatura: number | null
    _count: Preofe_mateCountAggregateOutputType | null
    _avg: Preofe_mateAvgAggregateOutputType | null
    _sum: Preofe_mateSumAggregateOutputType | null
    _min: Preofe_mateMinAggregateOutputType | null
    _max: Preofe_mateMaxAggregateOutputType | null
  }

  type GetPreofe_mateGroupByPayload<T extends preofe_mateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Preofe_mateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Preofe_mateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Preofe_mateGroupByOutputType[P]>
            : GetScalarType<T[P], Preofe_mateGroupByOutputType[P]>
        }
      >
    >


  export type preofe_mateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_preofe?: boolean
    fk_pregrado?: boolean
    fk_asignatura?: boolean
    pregrado?: boolean | preofe_mate$pregradoArgs<ExtArgs>
    asignaturas?: boolean | preofe_mate$asignaturasArgs<ExtArgs>
  }, ExtArgs["result"]["preofe_mate"]>



  export type preofe_mateSelectScalar = {
    pk_preofe?: boolean
    fk_pregrado?: boolean
    fk_asignatura?: boolean
  }

  export type preofe_mateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_preofe" | "fk_pregrado" | "fk_asignatura", ExtArgs["result"]["preofe_mate"]>
  export type preofe_mateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pregrado?: boolean | preofe_mate$pregradoArgs<ExtArgs>
    asignaturas?: boolean | preofe_mate$asignaturasArgs<ExtArgs>
  }

  export type $preofe_matePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preofe_mate"
    objects: {
      pregrado: Prisma.$pregradoPayload<ExtArgs> | null
      asignaturas: Prisma.$asignaturasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_preofe: number
      fk_pregrado: number | null
      fk_asignatura: number | null
    }, ExtArgs["result"]["preofe_mate"]>
    composites: {}
  }

  type preofe_mateGetPayload<S extends boolean | null | undefined | preofe_mateDefaultArgs> = $Result.GetResult<Prisma.$preofe_matePayload, S>

  type preofe_mateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preofe_mateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Preofe_mateCountAggregateInputType | true
    }

  export interface preofe_mateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preofe_mate'], meta: { name: 'preofe_mate' } }
    /**
     * Find zero or one Preofe_mate that matches the filter.
     * @param {preofe_mateFindUniqueArgs} args - Arguments to find a Preofe_mate
     * @example
     * // Get one Preofe_mate
     * const preofe_mate = await prisma.preofe_mate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preofe_mateFindUniqueArgs>(args: SelectSubset<T, preofe_mateFindUniqueArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preofe_mate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preofe_mateFindUniqueOrThrowArgs} args - Arguments to find a Preofe_mate
     * @example
     * // Get one Preofe_mate
     * const preofe_mate = await prisma.preofe_mate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preofe_mateFindUniqueOrThrowArgs>(args: SelectSubset<T, preofe_mateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preofe_mate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preofe_mateFindFirstArgs} args - Arguments to find a Preofe_mate
     * @example
     * // Get one Preofe_mate
     * const preofe_mate = await prisma.preofe_mate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preofe_mateFindFirstArgs>(args?: SelectSubset<T, preofe_mateFindFirstArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preofe_mate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preofe_mateFindFirstOrThrowArgs} args - Arguments to find a Preofe_mate
     * @example
     * // Get one Preofe_mate
     * const preofe_mate = await prisma.preofe_mate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preofe_mateFindFirstOrThrowArgs>(args?: SelectSubset<T, preofe_mateFindFirstOrThrowArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preofe_mates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preofe_mateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preofe_mates
     * const preofe_mates = await prisma.preofe_mate.findMany()
     * 
     * // Get first 10 Preofe_mates
     * const preofe_mates = await prisma.preofe_mate.findMany({ take: 10 })
     * 
     * // Only select the `pk_preofe`
     * const preofe_mateWithPk_preofeOnly = await prisma.preofe_mate.findMany({ select: { pk_preofe: true } })
     * 
     */
    findMany<T extends preofe_mateFindManyArgs>(args?: SelectSubset<T, preofe_mateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preofe_mate.
     * @param {preofe_mateCreateArgs} args - Arguments to create a Preofe_mate.
     * @example
     * // Create one Preofe_mate
     * const Preofe_mate = await prisma.preofe_mate.create({
     *   data: {
     *     // ... data to create a Preofe_mate
     *   }
     * })
     * 
     */
    create<T extends preofe_mateCreateArgs>(args: SelectSubset<T, preofe_mateCreateArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preofe_mates.
     * @param {preofe_mateCreateManyArgs} args - Arguments to create many Preofe_mates.
     * @example
     * // Create many Preofe_mates
     * const preofe_mate = await prisma.preofe_mate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preofe_mateCreateManyArgs>(args?: SelectSubset<T, preofe_mateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Preofe_mate.
     * @param {preofe_mateDeleteArgs} args - Arguments to delete one Preofe_mate.
     * @example
     * // Delete one Preofe_mate
     * const Preofe_mate = await prisma.preofe_mate.delete({
     *   where: {
     *     // ... filter to delete one Preofe_mate
     *   }
     * })
     * 
     */
    delete<T extends preofe_mateDeleteArgs>(args: SelectSubset<T, preofe_mateDeleteArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preofe_mate.
     * @param {preofe_mateUpdateArgs} args - Arguments to update one Preofe_mate.
     * @example
     * // Update one Preofe_mate
     * const preofe_mate = await prisma.preofe_mate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preofe_mateUpdateArgs>(args: SelectSubset<T, preofe_mateUpdateArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preofe_mates.
     * @param {preofe_mateDeleteManyArgs} args - Arguments to filter Preofe_mates to delete.
     * @example
     * // Delete a few Preofe_mates
     * const { count } = await prisma.preofe_mate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preofe_mateDeleteManyArgs>(args?: SelectSubset<T, preofe_mateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preofe_mates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preofe_mateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preofe_mates
     * const preofe_mate = await prisma.preofe_mate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preofe_mateUpdateManyArgs>(args: SelectSubset<T, preofe_mateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Preofe_mate.
     * @param {preofe_mateUpsertArgs} args - Arguments to update or create a Preofe_mate.
     * @example
     * // Update or create a Preofe_mate
     * const preofe_mate = await prisma.preofe_mate.upsert({
     *   create: {
     *     // ... data to create a Preofe_mate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preofe_mate we want to update
     *   }
     * })
     */
    upsert<T extends preofe_mateUpsertArgs>(args: SelectSubset<T, preofe_mateUpsertArgs<ExtArgs>>): Prisma__preofe_mateClient<$Result.GetResult<Prisma.$preofe_matePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preofe_mates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preofe_mateCountArgs} args - Arguments to filter Preofe_mates to count.
     * @example
     * // Count the number of Preofe_mates
     * const count = await prisma.preofe_mate.count({
     *   where: {
     *     // ... the filter for the Preofe_mates we want to count
     *   }
     * })
    **/
    count<T extends preofe_mateCountArgs>(
      args?: Subset<T, preofe_mateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Preofe_mateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preofe_mate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Preofe_mateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Preofe_mateAggregateArgs>(args: Subset<T, Preofe_mateAggregateArgs>): Prisma.PrismaPromise<GetPreofe_mateAggregateType<T>>

    /**
     * Group by Preofe_mate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preofe_mateGroupByArgs} args - Group by arguments.
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
      T extends preofe_mateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preofe_mateGroupByArgs['orderBy'] }
        : { orderBy?: preofe_mateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, preofe_mateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreofe_mateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preofe_mate model
   */
  readonly fields: preofe_mateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preofe_mate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preofe_mateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pregrado<T extends preofe_mate$pregradoArgs<ExtArgs> = {}>(args?: Subset<T, preofe_mate$pregradoArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    asignaturas<T extends preofe_mate$asignaturasArgs<ExtArgs> = {}>(args?: Subset<T, preofe_mate$asignaturasArgs<ExtArgs>>): Prisma__asignaturasClient<$Result.GetResult<Prisma.$asignaturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the preofe_mate model
   */
  interface preofe_mateFieldRefs {
    readonly pk_preofe: FieldRef<"preofe_mate", 'Int'>
    readonly fk_pregrado: FieldRef<"preofe_mate", 'Int'>
    readonly fk_asignatura: FieldRef<"preofe_mate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * preofe_mate findUnique
   */
  export type preofe_mateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * Filter, which preofe_mate to fetch.
     */
    where: preofe_mateWhereUniqueInput
  }

  /**
   * preofe_mate findUniqueOrThrow
   */
  export type preofe_mateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * Filter, which preofe_mate to fetch.
     */
    where: preofe_mateWhereUniqueInput
  }

  /**
   * preofe_mate findFirst
   */
  export type preofe_mateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * Filter, which preofe_mate to fetch.
     */
    where?: preofe_mateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preofe_mates to fetch.
     */
    orderBy?: preofe_mateOrderByWithRelationInput | preofe_mateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preofe_mates.
     */
    cursor?: preofe_mateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preofe_mates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preofe_mates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preofe_mates.
     */
    distinct?: Preofe_mateScalarFieldEnum | Preofe_mateScalarFieldEnum[]
  }

  /**
   * preofe_mate findFirstOrThrow
   */
  export type preofe_mateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * Filter, which preofe_mate to fetch.
     */
    where?: preofe_mateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preofe_mates to fetch.
     */
    orderBy?: preofe_mateOrderByWithRelationInput | preofe_mateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preofe_mates.
     */
    cursor?: preofe_mateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preofe_mates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preofe_mates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preofe_mates.
     */
    distinct?: Preofe_mateScalarFieldEnum | Preofe_mateScalarFieldEnum[]
  }

  /**
   * preofe_mate findMany
   */
  export type preofe_mateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * Filter, which preofe_mates to fetch.
     */
    where?: preofe_mateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preofe_mates to fetch.
     */
    orderBy?: preofe_mateOrderByWithRelationInput | preofe_mateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing preofe_mates.
     */
    cursor?: preofe_mateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preofe_mates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preofe_mates.
     */
    skip?: number
    distinct?: Preofe_mateScalarFieldEnum | Preofe_mateScalarFieldEnum[]
  }

  /**
   * preofe_mate create
   */
  export type preofe_mateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * The data needed to create a preofe_mate.
     */
    data?: XOR<preofe_mateCreateInput, preofe_mateUncheckedCreateInput>
  }

  /**
   * preofe_mate createMany
   */
  export type preofe_mateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many preofe_mates.
     */
    data: preofe_mateCreateManyInput | preofe_mateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preofe_mate update
   */
  export type preofe_mateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * The data needed to update a preofe_mate.
     */
    data: XOR<preofe_mateUpdateInput, preofe_mateUncheckedUpdateInput>
    /**
     * Choose, which preofe_mate to update.
     */
    where: preofe_mateWhereUniqueInput
  }

  /**
   * preofe_mate updateMany
   */
  export type preofe_mateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update preofe_mates.
     */
    data: XOR<preofe_mateUpdateManyMutationInput, preofe_mateUncheckedUpdateManyInput>
    /**
     * Filter which preofe_mates to update
     */
    where?: preofe_mateWhereInput
    /**
     * Limit how many preofe_mates to update.
     */
    limit?: number
  }

  /**
   * preofe_mate upsert
   */
  export type preofe_mateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * The filter to search for the preofe_mate to update in case it exists.
     */
    where: preofe_mateWhereUniqueInput
    /**
     * In case the preofe_mate found by the `where` argument doesn't exist, create a new preofe_mate with this data.
     */
    create: XOR<preofe_mateCreateInput, preofe_mateUncheckedCreateInput>
    /**
     * In case the preofe_mate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preofe_mateUpdateInput, preofe_mateUncheckedUpdateInput>
  }

  /**
   * preofe_mate delete
   */
  export type preofe_mateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
    /**
     * Filter which preofe_mate to delete.
     */
    where: preofe_mateWhereUniqueInput
  }

  /**
   * preofe_mate deleteMany
   */
  export type preofe_mateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preofe_mates to delete
     */
    where?: preofe_mateWhereInput
    /**
     * Limit how many preofe_mates to delete.
     */
    limit?: number
  }

  /**
   * preofe_mate.pregrado
   */
  export type preofe_mate$pregradoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    where?: pregradoWhereInput
  }

  /**
   * preofe_mate.asignaturas
   */
  export type preofe_mate$asignaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asignaturas
     */
    select?: asignaturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asignaturas
     */
    omit?: asignaturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asignaturasInclude<ExtArgs> | null
    where?: asignaturasWhereInput
  }

  /**
   * preofe_mate without action
   */
  export type preofe_mateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preofe_mate
     */
    select?: preofe_mateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preofe_mate
     */
    omit?: preofe_mateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preofe_mateInclude<ExtArgs> | null
  }


  /**
   * Model semestre
   */

  export type AggregateSemestre = {
    _count: SemestreCountAggregateOutputType | null
    _avg: SemestreAvgAggregateOutputType | null
    _sum: SemestreSumAggregateOutputType | null
    _min: SemestreMinAggregateOutputType | null
    _max: SemestreMaxAggregateOutputType | null
  }

  export type SemestreAvgAggregateOutputType = {
    pk_semestre: number | null
    numero: number | null
    fk_pregrado: number | null
  }

  export type SemestreSumAggregateOutputType = {
    pk_semestre: number | null
    numero: number | null
    fk_pregrado: number | null
  }

  export type SemestreMinAggregateOutputType = {
    pk_semestre: number | null
    numero: number | null
    fk_pregrado: number | null
  }

  export type SemestreMaxAggregateOutputType = {
    pk_semestre: number | null
    numero: number | null
    fk_pregrado: number | null
  }

  export type SemestreCountAggregateOutputType = {
    pk_semestre: number
    numero: number
    fk_pregrado: number
    _all: number
  }


  export type SemestreAvgAggregateInputType = {
    pk_semestre?: true
    numero?: true
    fk_pregrado?: true
  }

  export type SemestreSumAggregateInputType = {
    pk_semestre?: true
    numero?: true
    fk_pregrado?: true
  }

  export type SemestreMinAggregateInputType = {
    pk_semestre?: true
    numero?: true
    fk_pregrado?: true
  }

  export type SemestreMaxAggregateInputType = {
    pk_semestre?: true
    numero?: true
    fk_pregrado?: true
  }

  export type SemestreCountAggregateInputType = {
    pk_semestre?: true
    numero?: true
    fk_pregrado?: true
    _all?: true
  }

  export type SemestreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semestre to aggregate.
     */
    where?: semestreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semestres to fetch.
     */
    orderBy?: semestreOrderByWithRelationInput | semestreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: semestreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semestres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semestres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned semestres
    **/
    _count?: true | SemestreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SemestreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SemestreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemestreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemestreMaxAggregateInputType
  }

  export type GetSemestreAggregateType<T extends SemestreAggregateArgs> = {
        [P in keyof T & keyof AggregateSemestre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemestre[P]>
      : GetScalarType<T[P], AggregateSemestre[P]>
  }




  export type semestreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semestreWhereInput
    orderBy?: semestreOrderByWithAggregationInput | semestreOrderByWithAggregationInput[]
    by: SemestreScalarFieldEnum[] | SemestreScalarFieldEnum
    having?: semestreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemestreCountAggregateInputType | true
    _avg?: SemestreAvgAggregateInputType
    _sum?: SemestreSumAggregateInputType
    _min?: SemestreMinAggregateInputType
    _max?: SemestreMaxAggregateInputType
  }

  export type SemestreGroupByOutputType = {
    pk_semestre: number
    numero: number | null
    fk_pregrado: number | null
    _count: SemestreCountAggregateOutputType | null
    _avg: SemestreAvgAggregateOutputType | null
    _sum: SemestreSumAggregateOutputType | null
    _min: SemestreMinAggregateOutputType | null
    _max: SemestreMaxAggregateOutputType | null
  }

  type GetSemestreGroupByPayload<T extends semestreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemestreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemestreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemestreGroupByOutputType[P]>
            : GetScalarType<T[P], SemestreGroupByOutputType[P]>
        }
      >
    >


  export type semestreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_semestre?: boolean
    numero?: boolean
    fk_pregrado?: boolean
    pregrado?: boolean | semestre$pregradoArgs<ExtArgs>
    datos?: boolean | semestre$datosArgs<ExtArgs>
    _count?: boolean | SemestreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semestre"]>



  export type semestreSelectScalar = {
    pk_semestre?: boolean
    numero?: boolean
    fk_pregrado?: boolean
  }

  export type semestreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_semestre" | "numero" | "fk_pregrado", ExtArgs["result"]["semestre"]>
  export type semestreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pregrado?: boolean | semestre$pregradoArgs<ExtArgs>
    datos?: boolean | semestre$datosArgs<ExtArgs>
    _count?: boolean | SemestreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $semestrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "semestre"
    objects: {
      pregrado: Prisma.$pregradoPayload<ExtArgs> | null
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_semestre: number
      numero: number | null
      fk_pregrado: number | null
    }, ExtArgs["result"]["semestre"]>
    composites: {}
  }

  type semestreGetPayload<S extends boolean | null | undefined | semestreDefaultArgs> = $Result.GetResult<Prisma.$semestrePayload, S>

  type semestreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<semestreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemestreCountAggregateInputType | true
    }

  export interface semestreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['semestre'], meta: { name: 'semestre' } }
    /**
     * Find zero or one Semestre that matches the filter.
     * @param {semestreFindUniqueArgs} args - Arguments to find a Semestre
     * @example
     * // Get one Semestre
     * const semestre = await prisma.semestre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends semestreFindUniqueArgs>(args: SelectSubset<T, semestreFindUniqueArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semestre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {semestreFindUniqueOrThrowArgs} args - Arguments to find a Semestre
     * @example
     * // Get one Semestre
     * const semestre = await prisma.semestre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends semestreFindUniqueOrThrowArgs>(args: SelectSubset<T, semestreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semestre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semestreFindFirstArgs} args - Arguments to find a Semestre
     * @example
     * // Get one Semestre
     * const semestre = await prisma.semestre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends semestreFindFirstArgs>(args?: SelectSubset<T, semestreFindFirstArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semestre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semestreFindFirstOrThrowArgs} args - Arguments to find a Semestre
     * @example
     * // Get one Semestre
     * const semestre = await prisma.semestre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends semestreFindFirstOrThrowArgs>(args?: SelectSubset<T, semestreFindFirstOrThrowArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semestres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semestreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semestres
     * const semestres = await prisma.semestre.findMany()
     * 
     * // Get first 10 Semestres
     * const semestres = await prisma.semestre.findMany({ take: 10 })
     * 
     * // Only select the `pk_semestre`
     * const semestreWithPk_semestreOnly = await prisma.semestre.findMany({ select: { pk_semestre: true } })
     * 
     */
    findMany<T extends semestreFindManyArgs>(args?: SelectSubset<T, semestreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semestre.
     * @param {semestreCreateArgs} args - Arguments to create a Semestre.
     * @example
     * // Create one Semestre
     * const Semestre = await prisma.semestre.create({
     *   data: {
     *     // ... data to create a Semestre
     *   }
     * })
     * 
     */
    create<T extends semestreCreateArgs>(args: SelectSubset<T, semestreCreateArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semestres.
     * @param {semestreCreateManyArgs} args - Arguments to create many Semestres.
     * @example
     * // Create many Semestres
     * const semestre = await prisma.semestre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends semestreCreateManyArgs>(args?: SelectSubset<T, semestreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Semestre.
     * @param {semestreDeleteArgs} args - Arguments to delete one Semestre.
     * @example
     * // Delete one Semestre
     * const Semestre = await prisma.semestre.delete({
     *   where: {
     *     // ... filter to delete one Semestre
     *   }
     * })
     * 
     */
    delete<T extends semestreDeleteArgs>(args: SelectSubset<T, semestreDeleteArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semestre.
     * @param {semestreUpdateArgs} args - Arguments to update one Semestre.
     * @example
     * // Update one Semestre
     * const semestre = await prisma.semestre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends semestreUpdateArgs>(args: SelectSubset<T, semestreUpdateArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semestres.
     * @param {semestreDeleteManyArgs} args - Arguments to filter Semestres to delete.
     * @example
     * // Delete a few Semestres
     * const { count } = await prisma.semestre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends semestreDeleteManyArgs>(args?: SelectSubset<T, semestreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semestres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semestreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semestres
     * const semestre = await prisma.semestre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends semestreUpdateManyArgs>(args: SelectSubset<T, semestreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Semestre.
     * @param {semestreUpsertArgs} args - Arguments to update or create a Semestre.
     * @example
     * // Update or create a Semestre
     * const semestre = await prisma.semestre.upsert({
     *   create: {
     *     // ... data to create a Semestre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semestre we want to update
     *   }
     * })
     */
    upsert<T extends semestreUpsertArgs>(args: SelectSubset<T, semestreUpsertArgs<ExtArgs>>): Prisma__semestreClient<$Result.GetResult<Prisma.$semestrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semestres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semestreCountArgs} args - Arguments to filter Semestres to count.
     * @example
     * // Count the number of Semestres
     * const count = await prisma.semestre.count({
     *   where: {
     *     // ... the filter for the Semestres we want to count
     *   }
     * })
    **/
    count<T extends semestreCountArgs>(
      args?: Subset<T, semestreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemestreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semestre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemestreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SemestreAggregateArgs>(args: Subset<T, SemestreAggregateArgs>): Prisma.PrismaPromise<GetSemestreAggregateType<T>>

    /**
     * Group by Semestre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semestreGroupByArgs} args - Group by arguments.
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
      T extends semestreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: semestreGroupByArgs['orderBy'] }
        : { orderBy?: semestreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, semestreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemestreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the semestre model
   */
  readonly fields: semestreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for semestre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__semestreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pregrado<T extends semestre$pregradoArgs<ExtArgs> = {}>(args?: Subset<T, semestre$pregradoArgs<ExtArgs>>): Prisma__pregradoClient<$Result.GetResult<Prisma.$pregradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    datos<T extends semestre$datosArgs<ExtArgs> = {}>(args?: Subset<T, semestre$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the semestre model
   */
  interface semestreFieldRefs {
    readonly pk_semestre: FieldRef<"semestre", 'Int'>
    readonly numero: FieldRef<"semestre", 'Int'>
    readonly fk_pregrado: FieldRef<"semestre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * semestre findUnique
   */
  export type semestreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * Filter, which semestre to fetch.
     */
    where: semestreWhereUniqueInput
  }

  /**
   * semestre findUniqueOrThrow
   */
  export type semestreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * Filter, which semestre to fetch.
     */
    where: semestreWhereUniqueInput
  }

  /**
   * semestre findFirst
   */
  export type semestreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * Filter, which semestre to fetch.
     */
    where?: semestreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semestres to fetch.
     */
    orderBy?: semestreOrderByWithRelationInput | semestreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for semestres.
     */
    cursor?: semestreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semestres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semestres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of semestres.
     */
    distinct?: SemestreScalarFieldEnum | SemestreScalarFieldEnum[]
  }

  /**
   * semestre findFirstOrThrow
   */
  export type semestreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * Filter, which semestre to fetch.
     */
    where?: semestreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semestres to fetch.
     */
    orderBy?: semestreOrderByWithRelationInput | semestreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for semestres.
     */
    cursor?: semestreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semestres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semestres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of semestres.
     */
    distinct?: SemestreScalarFieldEnum | SemestreScalarFieldEnum[]
  }

  /**
   * semestre findMany
   */
  export type semestreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * Filter, which semestres to fetch.
     */
    where?: semestreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semestres to fetch.
     */
    orderBy?: semestreOrderByWithRelationInput | semestreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing semestres.
     */
    cursor?: semestreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semestres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semestres.
     */
    skip?: number
    distinct?: SemestreScalarFieldEnum | SemestreScalarFieldEnum[]
  }

  /**
   * semestre create
   */
  export type semestreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * The data needed to create a semestre.
     */
    data?: XOR<semestreCreateInput, semestreUncheckedCreateInput>
  }

  /**
   * semestre createMany
   */
  export type semestreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many semestres.
     */
    data: semestreCreateManyInput | semestreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * semestre update
   */
  export type semestreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * The data needed to update a semestre.
     */
    data: XOR<semestreUpdateInput, semestreUncheckedUpdateInput>
    /**
     * Choose, which semestre to update.
     */
    where: semestreWhereUniqueInput
  }

  /**
   * semestre updateMany
   */
  export type semestreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update semestres.
     */
    data: XOR<semestreUpdateManyMutationInput, semestreUncheckedUpdateManyInput>
    /**
     * Filter which semestres to update
     */
    where?: semestreWhereInput
    /**
     * Limit how many semestres to update.
     */
    limit?: number
  }

  /**
   * semestre upsert
   */
  export type semestreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * The filter to search for the semestre to update in case it exists.
     */
    where: semestreWhereUniqueInput
    /**
     * In case the semestre found by the `where` argument doesn't exist, create a new semestre with this data.
     */
    create: XOR<semestreCreateInput, semestreUncheckedCreateInput>
    /**
     * In case the semestre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<semestreUpdateInput, semestreUncheckedUpdateInput>
  }

  /**
   * semestre delete
   */
  export type semestreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
    /**
     * Filter which semestre to delete.
     */
    where: semestreWhereUniqueInput
  }

  /**
   * semestre deleteMany
   */
  export type semestreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semestres to delete
     */
    where?: semestreWhereInput
    /**
     * Limit how many semestres to delete.
     */
    limit?: number
  }

  /**
   * semestre.pregrado
   */
  export type semestre$pregradoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pregrado
     */
    select?: pregradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pregrado
     */
    omit?: pregradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pregradoInclude<ExtArgs> | null
    where?: pregradoWhereInput
  }

  /**
   * semestre.datos
   */
  export type semestre$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * semestre without action
   */
  export type semestreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semestre
     */
    select?: semestreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semestre
     */
    omit?: semestreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semestreInclude<ExtArgs> | null
  }


  /**
   * Model tipo_status
   */

  export type AggregateTipo_status = {
    _count: Tipo_statusCountAggregateOutputType | null
    _avg: Tipo_statusAvgAggregateOutputType | null
    _sum: Tipo_statusSumAggregateOutputType | null
    _min: Tipo_statusMinAggregateOutputType | null
    _max: Tipo_statusMaxAggregateOutputType | null
  }

  export type Tipo_statusAvgAggregateOutputType = {
    pk_status: number | null
  }

  export type Tipo_statusSumAggregateOutputType = {
    pk_status: number | null
  }

  export type Tipo_statusMinAggregateOutputType = {
    pk_status: number | null
    nombre_status: string | null
  }

  export type Tipo_statusMaxAggregateOutputType = {
    pk_status: number | null
    nombre_status: string | null
  }

  export type Tipo_statusCountAggregateOutputType = {
    pk_status: number
    nombre_status: number
    _all: number
  }


  export type Tipo_statusAvgAggregateInputType = {
    pk_status?: true
  }

  export type Tipo_statusSumAggregateInputType = {
    pk_status?: true
  }

  export type Tipo_statusMinAggregateInputType = {
    pk_status?: true
    nombre_status?: true
  }

  export type Tipo_statusMaxAggregateInputType = {
    pk_status?: true
    nombre_status?: true
  }

  export type Tipo_statusCountAggregateInputType = {
    pk_status?: true
    nombre_status?: true
    _all?: true
  }

  export type Tipo_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_status to aggregate.
     */
    where?: tipo_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_statuses to fetch.
     */
    orderBy?: tipo_statusOrderByWithRelationInput | tipo_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_statuses
    **/
    _count?: true | Tipo_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_statusMaxAggregateInputType
  }

  export type GetTipo_statusAggregateType<T extends Tipo_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_status[P]>
      : GetScalarType<T[P], AggregateTipo_status[P]>
  }




  export type tipo_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_statusWhereInput
    orderBy?: tipo_statusOrderByWithAggregationInput | tipo_statusOrderByWithAggregationInput[]
    by: Tipo_statusScalarFieldEnum[] | Tipo_statusScalarFieldEnum
    having?: tipo_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_statusCountAggregateInputType | true
    _avg?: Tipo_statusAvgAggregateInputType
    _sum?: Tipo_statusSumAggregateInputType
    _min?: Tipo_statusMinAggregateInputType
    _max?: Tipo_statusMaxAggregateInputType
  }

  export type Tipo_statusGroupByOutputType = {
    pk_status: number
    nombre_status: string | null
    _count: Tipo_statusCountAggregateOutputType | null
    _avg: Tipo_statusAvgAggregateOutputType | null
    _sum: Tipo_statusSumAggregateOutputType | null
    _min: Tipo_statusMinAggregateOutputType | null
    _max: Tipo_statusMaxAggregateOutputType | null
  }

  type GetTipo_statusGroupByPayload<T extends tipo_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_statusGroupByOutputType[P]>
        }
      >
    >


  export type tipo_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_status?: boolean
    nombre_status?: boolean
    datos?: boolean | tipo_status$datosArgs<ExtArgs>
    _count?: boolean | Tipo_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_status"]>



  export type tipo_statusSelectScalar = {
    pk_status?: boolean
    nombre_status?: boolean
  }

  export type tipo_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pk_status" | "nombre_status", ExtArgs["result"]["tipo_status"]>
  export type tipo_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datos?: boolean | tipo_status$datosArgs<ExtArgs>
    _count?: boolean | Tipo_statusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipo_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_status"
    objects: {
      datos: Prisma.$datosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_status: number
      nombre_status: string | null
    }, ExtArgs["result"]["tipo_status"]>
    composites: {}
  }

  type tipo_statusGetPayload<S extends boolean | null | undefined | tipo_statusDefaultArgs> = $Result.GetResult<Prisma.$tipo_statusPayload, S>

  type tipo_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_statusCountAggregateInputType | true
    }

  export interface tipo_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_status'], meta: { name: 'tipo_status' } }
    /**
     * Find zero or one Tipo_status that matches the filter.
     * @param {tipo_statusFindUniqueArgs} args - Arguments to find a Tipo_status
     * @example
     * // Get one Tipo_status
     * const tipo_status = await prisma.tipo_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_statusFindUniqueArgs>(args: SelectSubset<T, tipo_statusFindUniqueArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_statusFindUniqueOrThrowArgs} args - Arguments to find a Tipo_status
     * @example
     * // Get one Tipo_status
     * const tipo_status = await prisma.tipo_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_statusFindFirstArgs} args - Arguments to find a Tipo_status
     * @example
     * // Get one Tipo_status
     * const tipo_status = await prisma.tipo_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_statusFindFirstArgs>(args?: SelectSubset<T, tipo_statusFindFirstArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_statusFindFirstOrThrowArgs} args - Arguments to find a Tipo_status
     * @example
     * // Get one Tipo_status
     * const tipo_status = await prisma.tipo_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_statuses
     * const tipo_statuses = await prisma.tipo_status.findMany()
     * 
     * // Get first 10 Tipo_statuses
     * const tipo_statuses = await prisma.tipo_status.findMany({ take: 10 })
     * 
     * // Only select the `pk_status`
     * const tipo_statusWithPk_statusOnly = await prisma.tipo_status.findMany({ select: { pk_status: true } })
     * 
     */
    findMany<T extends tipo_statusFindManyArgs>(args?: SelectSubset<T, tipo_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_status.
     * @param {tipo_statusCreateArgs} args - Arguments to create a Tipo_status.
     * @example
     * // Create one Tipo_status
     * const Tipo_status = await prisma.tipo_status.create({
     *   data: {
     *     // ... data to create a Tipo_status
     *   }
     * })
     * 
     */
    create<T extends tipo_statusCreateArgs>(args: SelectSubset<T, tipo_statusCreateArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_statuses.
     * @param {tipo_statusCreateManyArgs} args - Arguments to create many Tipo_statuses.
     * @example
     * // Create many Tipo_statuses
     * const tipo_status = await prisma.tipo_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_statusCreateManyArgs>(args?: SelectSubset<T, tipo_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_status.
     * @param {tipo_statusDeleteArgs} args - Arguments to delete one Tipo_status.
     * @example
     * // Delete one Tipo_status
     * const Tipo_status = await prisma.tipo_status.delete({
     *   where: {
     *     // ... filter to delete one Tipo_status
     *   }
     * })
     * 
     */
    delete<T extends tipo_statusDeleteArgs>(args: SelectSubset<T, tipo_statusDeleteArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_status.
     * @param {tipo_statusUpdateArgs} args - Arguments to update one Tipo_status.
     * @example
     * // Update one Tipo_status
     * const tipo_status = await prisma.tipo_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_statusUpdateArgs>(args: SelectSubset<T, tipo_statusUpdateArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_statuses.
     * @param {tipo_statusDeleteManyArgs} args - Arguments to filter Tipo_statuses to delete.
     * @example
     * // Delete a few Tipo_statuses
     * const { count } = await prisma.tipo_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_statusDeleteManyArgs>(args?: SelectSubset<T, tipo_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_statuses
     * const tipo_status = await prisma.tipo_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_statusUpdateManyArgs>(args: SelectSubset<T, tipo_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_status.
     * @param {tipo_statusUpsertArgs} args - Arguments to update or create a Tipo_status.
     * @example
     * // Update or create a Tipo_status
     * const tipo_status = await prisma.tipo_status.upsert({
     *   create: {
     *     // ... data to create a Tipo_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_status we want to update
     *   }
     * })
     */
    upsert<T extends tipo_statusUpsertArgs>(args: SelectSubset<T, tipo_statusUpsertArgs<ExtArgs>>): Prisma__tipo_statusClient<$Result.GetResult<Prisma.$tipo_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_statusCountArgs} args - Arguments to filter Tipo_statuses to count.
     * @example
     * // Count the number of Tipo_statuses
     * const count = await prisma.tipo_status.count({
     *   where: {
     *     // ... the filter for the Tipo_statuses we want to count
     *   }
     * })
    **/
    count<T extends tipo_statusCountArgs>(
      args?: Subset<T, tipo_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_statusAggregateArgs>(args: Subset<T, Tipo_statusAggregateArgs>): Prisma.PrismaPromise<GetTipo_statusAggregateType<T>>

    /**
     * Group by Tipo_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_statusGroupByArgs} args - Group by arguments.
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
      T extends tipo_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_statusGroupByArgs['orderBy'] }
        : { orderBy?: tipo_statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_status model
   */
  readonly fields: tipo_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datos<T extends tipo_status$datosArgs<ExtArgs> = {}>(args?: Subset<T, tipo_status$datosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipo_status model
   */
  interface tipo_statusFieldRefs {
    readonly pk_status: FieldRef<"tipo_status", 'Int'>
    readonly nombre_status: FieldRef<"tipo_status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_status findUnique
   */
  export type tipo_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * Filter, which tipo_status to fetch.
     */
    where: tipo_statusWhereUniqueInput
  }

  /**
   * tipo_status findUniqueOrThrow
   */
  export type tipo_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * Filter, which tipo_status to fetch.
     */
    where: tipo_statusWhereUniqueInput
  }

  /**
   * tipo_status findFirst
   */
  export type tipo_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * Filter, which tipo_status to fetch.
     */
    where?: tipo_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_statuses to fetch.
     */
    orderBy?: tipo_statusOrderByWithRelationInput | tipo_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_statuses.
     */
    cursor?: tipo_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_statuses.
     */
    distinct?: Tipo_statusScalarFieldEnum | Tipo_statusScalarFieldEnum[]
  }

  /**
   * tipo_status findFirstOrThrow
   */
  export type tipo_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * Filter, which tipo_status to fetch.
     */
    where?: tipo_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_statuses to fetch.
     */
    orderBy?: tipo_statusOrderByWithRelationInput | tipo_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_statuses.
     */
    cursor?: tipo_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_statuses.
     */
    distinct?: Tipo_statusScalarFieldEnum | Tipo_statusScalarFieldEnum[]
  }

  /**
   * tipo_status findMany
   */
  export type tipo_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * Filter, which tipo_statuses to fetch.
     */
    where?: tipo_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_statuses to fetch.
     */
    orderBy?: tipo_statusOrderByWithRelationInput | tipo_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_statuses.
     */
    cursor?: tipo_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_statuses.
     */
    skip?: number
    distinct?: Tipo_statusScalarFieldEnum | Tipo_statusScalarFieldEnum[]
  }

  /**
   * tipo_status create
   */
  export type tipo_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_status.
     */
    data?: XOR<tipo_statusCreateInput, tipo_statusUncheckedCreateInput>
  }

  /**
   * tipo_status createMany
   */
  export type tipo_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_statuses.
     */
    data: tipo_statusCreateManyInput | tipo_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_status update
   */
  export type tipo_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_status.
     */
    data: XOR<tipo_statusUpdateInput, tipo_statusUncheckedUpdateInput>
    /**
     * Choose, which tipo_status to update.
     */
    where: tipo_statusWhereUniqueInput
  }

  /**
   * tipo_status updateMany
   */
  export type tipo_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_statuses.
     */
    data: XOR<tipo_statusUpdateManyMutationInput, tipo_statusUncheckedUpdateManyInput>
    /**
     * Filter which tipo_statuses to update
     */
    where?: tipo_statusWhereInput
    /**
     * Limit how many tipo_statuses to update.
     */
    limit?: number
  }

  /**
   * tipo_status upsert
   */
  export type tipo_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_status to update in case it exists.
     */
    where: tipo_statusWhereUniqueInput
    /**
     * In case the tipo_status found by the `where` argument doesn't exist, create a new tipo_status with this data.
     */
    create: XOR<tipo_statusCreateInput, tipo_statusUncheckedCreateInput>
    /**
     * In case the tipo_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_statusUpdateInput, tipo_statusUncheckedUpdateInput>
  }

  /**
   * tipo_status delete
   */
  export type tipo_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
    /**
     * Filter which tipo_status to delete.
     */
    where: tipo_statusWhereUniqueInput
  }

  /**
   * tipo_status deleteMany
   */
  export type tipo_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_statuses to delete
     */
    where?: tipo_statusWhereInput
    /**
     * Limit how many tipo_statuses to delete.
     */
    limit?: number
  }

  /**
   * tipo_status.datos
   */
  export type tipo_status$datosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos
     */
    select?: datosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos
     */
    omit?: datosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datosInclude<ExtArgs> | null
    where?: datosWhereInput
    orderBy?: datosOrderByWithRelationInput | datosOrderByWithRelationInput[]
    cursor?: datosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatosScalarFieldEnum | DatosScalarFieldEnum[]
  }

  /**
   * tipo_status without action
   */
  export type tipo_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_status
     */
    select?: tipo_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_status
     */
    omit?: tipo_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_statusInclude<ExtArgs> | null
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


  export const AccesoScalarFieldEnum: {
    pk_acceso: 'pk_acceso',
    usuario: 'usuario',
    contrasena: 'contrasena',
    fk_modulo: 'fk_modulo'
  };

  export type AccesoScalarFieldEnum = (typeof AccesoScalarFieldEnum)[keyof typeof AccesoScalarFieldEnum]


  export const AsignaturasScalarFieldEnum: {
    pk_asignatura: 'pk_asignatura',
    nombre_asignatura: 'nombre_asignatura',
    codigo: 'codigo'
  };

  export type AsignaturasScalarFieldEnum = (typeof AsignaturasScalarFieldEnum)[keyof typeof AsignaturasScalarFieldEnum]


  export const AulasScalarFieldEnum: {
    pk_aula: 'pk_aula',
    nombre_aula: 'nombre_aula',
    capacidad: 'capacidad'
  };

  export type AulasScalarFieldEnum = (typeof AulasScalarFieldEnum)[keyof typeof AulasScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    pk_cargo: 'pk_cargo',
    nombre_cargo: 'nombre_cargo'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const CiaScalarFieldEnum: {
    pk_cia: 'pk_cia',
    nombre_cia: 'nombre_cia',
    direccion: 'direccion',
    telefono: 'telefono'
  };

  export type CiaScalarFieldEnum = (typeof CiaScalarFieldEnum)[keyof typeof CiaScalarFieldEnum]


  export const CivilScalarFieldEnum: {
    pk_id_civil: 'pk_id_civil',
    nombre_civil: 'nombre_civil',
    fk_id_estado: 'fk_id_estado'
  };

  export type CivilScalarFieldEnum = (typeof CivilScalarFieldEnum)[keyof typeof CivilScalarFieldEnum]


  export const DatosScalarFieldEnum: {
    pk_dato: 'pk_dato',
    nombre: 'nombre',
    apellido: 'apellido',
    fk_id_doc: 'fk_id_doc',
    fk_id_civil: 'fk_id_civil',
    fk_id_gene: 'fk_id_gene',
    correo: 'correo',
    telefono: 'telefono',
    fk_pregrado: 'fk_pregrado',
    fk_id_semestre: 'fk_id_semestre',
    fk_id_tipo_status: 'fk_id_tipo_status',
    asignatura: 'asignatura',
    salon: 'salon',
    dia: 'dia',
    hora_inicio: 'hora_inicio',
    hora_fin: 'hora_fin'
  };

  export type DatosScalarFieldEnum = (typeof DatosScalarFieldEnum)[keyof typeof DatosScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    pk_id_doc: 'pk_id_doc',
    nombre_documento: 'nombre_documento',
    fk_id_estado: 'fk_id_estado'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    pk_id_estado: 'pk_id_estado',
    nombre: 'nombre'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    pk_id_gene: 'pk_id_gene',
    nom_genero: 'nom_genero',
    fk_id_estado: 'fk_id_estado'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const HorariosScalarFieldEnum: {
    pk_horario: 'pk_horario',
    dia: 'dia',
    hora_inicio: 'hora_inicio',
    hora_fin: 'hora_fin'
  };

  export type HorariosScalarFieldEnum = (typeof HorariosScalarFieldEnum)[keyof typeof HorariosScalarFieldEnum]


  export const LaboratorioScalarFieldEnum: {
    pk_lab: 'pk_lab',
    nombre_lab: 'nombre_lab',
    capacidad: 'capacidad'
  };

  export type LaboratorioScalarFieldEnum = (typeof LaboratorioScalarFieldEnum)[keyof typeof LaboratorioScalarFieldEnum]


  export const ModulosScalarFieldEnum: {
    pk_modulos: 'pk_modulos',
    nombre: 'nombre'
  };

  export type ModulosScalarFieldEnum = (typeof ModulosScalarFieldEnum)[keyof typeof ModulosScalarFieldEnum]


  export const Mov_asig_auScalarFieldEnum: {
    pk_mov: 'pk_mov',
    fk_asignatura: 'fk_asignatura',
    fk_aula: 'fk_aula',
    fk_horario: 'fk_horario'
  };

  export type Mov_asig_auScalarFieldEnum = (typeof Mov_asig_auScalarFieldEnum)[keyof typeof Mov_asig_auScalarFieldEnum]


  export const PregradoScalarFieldEnum: {
    pk_pregrado: 'pk_pregrado',
    nombre_pregrado: 'nombre_pregrado'
  };

  export type PregradoScalarFieldEnum = (typeof PregradoScalarFieldEnum)[keyof typeof PregradoScalarFieldEnum]


  export const Preofe_mateScalarFieldEnum: {
    pk_preofe: 'pk_preofe',
    fk_pregrado: 'fk_pregrado',
    fk_asignatura: 'fk_asignatura'
  };

  export type Preofe_mateScalarFieldEnum = (typeof Preofe_mateScalarFieldEnum)[keyof typeof Preofe_mateScalarFieldEnum]


  export const SemestreScalarFieldEnum: {
    pk_semestre: 'pk_semestre',
    numero: 'numero',
    fk_pregrado: 'fk_pregrado'
  };

  export type SemestreScalarFieldEnum = (typeof SemestreScalarFieldEnum)[keyof typeof SemestreScalarFieldEnum]


  export const Tipo_statusScalarFieldEnum: {
    pk_status: 'pk_status',
    nombre_status: 'nombre_status'
  };

  export type Tipo_statusScalarFieldEnum = (typeof Tipo_statusScalarFieldEnum)[keyof typeof Tipo_statusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const accesoOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    contrasena: 'contrasena'
  };

  export type accesoOrderByRelevanceFieldEnum = (typeof accesoOrderByRelevanceFieldEnum)[keyof typeof accesoOrderByRelevanceFieldEnum]


  export const asignaturasOrderByRelevanceFieldEnum: {
    nombre_asignatura: 'nombre_asignatura',
    codigo: 'codigo'
  };

  export type asignaturasOrderByRelevanceFieldEnum = (typeof asignaturasOrderByRelevanceFieldEnum)[keyof typeof asignaturasOrderByRelevanceFieldEnum]


  export const aulasOrderByRelevanceFieldEnum: {
    nombre_aula: 'nombre_aula'
  };

  export type aulasOrderByRelevanceFieldEnum = (typeof aulasOrderByRelevanceFieldEnum)[keyof typeof aulasOrderByRelevanceFieldEnum]


  export const cargoOrderByRelevanceFieldEnum: {
    nombre_cargo: 'nombre_cargo'
  };

  export type cargoOrderByRelevanceFieldEnum = (typeof cargoOrderByRelevanceFieldEnum)[keyof typeof cargoOrderByRelevanceFieldEnum]


  export const ciaOrderByRelevanceFieldEnum: {
    nombre_cia: 'nombre_cia',
    direccion: 'direccion',
    telefono: 'telefono'
  };

  export type ciaOrderByRelevanceFieldEnum = (typeof ciaOrderByRelevanceFieldEnum)[keyof typeof ciaOrderByRelevanceFieldEnum]


  export const civilOrderByRelevanceFieldEnum: {
    nombre_civil: 'nombre_civil'
  };

  export type civilOrderByRelevanceFieldEnum = (typeof civilOrderByRelevanceFieldEnum)[keyof typeof civilOrderByRelevanceFieldEnum]


  export const datosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    telefono: 'telefono',
    asignatura: 'asignatura',
    salon: 'salon',
    dia: 'dia',
    hora_inicio: 'hora_inicio',
    hora_fin: 'hora_fin'
  };

  export type datosOrderByRelevanceFieldEnum = (typeof datosOrderByRelevanceFieldEnum)[keyof typeof datosOrderByRelevanceFieldEnum]


  export const documentoOrderByRelevanceFieldEnum: {
    nombre_documento: 'nombre_documento'
  };

  export type documentoOrderByRelevanceFieldEnum = (typeof documentoOrderByRelevanceFieldEnum)[keyof typeof documentoOrderByRelevanceFieldEnum]


  export const estadoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type estadoOrderByRelevanceFieldEnum = (typeof estadoOrderByRelevanceFieldEnum)[keyof typeof estadoOrderByRelevanceFieldEnum]


  export const generoOrderByRelevanceFieldEnum: {
    nom_genero: 'nom_genero'
  };

  export type generoOrderByRelevanceFieldEnum = (typeof generoOrderByRelevanceFieldEnum)[keyof typeof generoOrderByRelevanceFieldEnum]


  export const horariosOrderByRelevanceFieldEnum: {
    dia: 'dia'
  };

  export type horariosOrderByRelevanceFieldEnum = (typeof horariosOrderByRelevanceFieldEnum)[keyof typeof horariosOrderByRelevanceFieldEnum]


  export const laboratorioOrderByRelevanceFieldEnum: {
    nombre_lab: 'nombre_lab'
  };

  export type laboratorioOrderByRelevanceFieldEnum = (typeof laboratorioOrderByRelevanceFieldEnum)[keyof typeof laboratorioOrderByRelevanceFieldEnum]


  export const modulosOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type modulosOrderByRelevanceFieldEnum = (typeof modulosOrderByRelevanceFieldEnum)[keyof typeof modulosOrderByRelevanceFieldEnum]


  export const pregradoOrderByRelevanceFieldEnum: {
    nombre_pregrado: 'nombre_pregrado'
  };

  export type pregradoOrderByRelevanceFieldEnum = (typeof pregradoOrderByRelevanceFieldEnum)[keyof typeof pregradoOrderByRelevanceFieldEnum]


  export const tipo_statusOrderByRelevanceFieldEnum: {
    nombre_status: 'nombre_status'
  };

  export type tipo_statusOrderByRelevanceFieldEnum = (typeof tipo_statusOrderByRelevanceFieldEnum)[keyof typeof tipo_statusOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accesoWhereInput = {
    AND?: accesoWhereInput | accesoWhereInput[]
    OR?: accesoWhereInput[]
    NOT?: accesoWhereInput | accesoWhereInput[]
    pk_acceso?: IntFilter<"acceso"> | number
    usuario?: StringNullableFilter<"acceso"> | string | null
    contrasena?: StringNullableFilter<"acceso"> | string | null
    fk_modulo?: IntNullableFilter<"acceso"> | number | null
    modulos?: XOR<ModulosNullableScalarRelationFilter, modulosWhereInput> | null
  }

  export type accesoOrderByWithRelationInput = {
    pk_acceso?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    fk_modulo?: SortOrderInput | SortOrder
    modulos?: modulosOrderByWithRelationInput
    _relevance?: accesoOrderByRelevanceInput
  }

  export type accesoWhereUniqueInput = Prisma.AtLeast<{
    pk_acceso?: number
    AND?: accesoWhereInput | accesoWhereInput[]
    OR?: accesoWhereInput[]
    NOT?: accesoWhereInput | accesoWhereInput[]
    usuario?: StringNullableFilter<"acceso"> | string | null
    contrasena?: StringNullableFilter<"acceso"> | string | null
    fk_modulo?: IntNullableFilter<"acceso"> | number | null
    modulos?: XOR<ModulosNullableScalarRelationFilter, modulosWhereInput> | null
  }, "pk_acceso">

  export type accesoOrderByWithAggregationInput = {
    pk_acceso?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    fk_modulo?: SortOrderInput | SortOrder
    _count?: accesoCountOrderByAggregateInput
    _avg?: accesoAvgOrderByAggregateInput
    _max?: accesoMaxOrderByAggregateInput
    _min?: accesoMinOrderByAggregateInput
    _sum?: accesoSumOrderByAggregateInput
  }

  export type accesoScalarWhereWithAggregatesInput = {
    AND?: accesoScalarWhereWithAggregatesInput | accesoScalarWhereWithAggregatesInput[]
    OR?: accesoScalarWhereWithAggregatesInput[]
    NOT?: accesoScalarWhereWithAggregatesInput | accesoScalarWhereWithAggregatesInput[]
    pk_acceso?: IntWithAggregatesFilter<"acceso"> | number
    usuario?: StringNullableWithAggregatesFilter<"acceso"> | string | null
    contrasena?: StringNullableWithAggregatesFilter<"acceso"> | string | null
    fk_modulo?: IntNullableWithAggregatesFilter<"acceso"> | number | null
  }

  export type asignaturasWhereInput = {
    AND?: asignaturasWhereInput | asignaturasWhereInput[]
    OR?: asignaturasWhereInput[]
    NOT?: asignaturasWhereInput | asignaturasWhereInput[]
    pk_asignatura?: IntFilter<"asignaturas"> | number
    nombre_asignatura?: StringNullableFilter<"asignaturas"> | string | null
    codigo?: StringNullableFilter<"asignaturas"> | string | null
    mov_asig_au?: Mov_asig_auListRelationFilter
    preofe_mate?: Preofe_mateListRelationFilter
  }

  export type asignaturasOrderByWithRelationInput = {
    pk_asignatura?: SortOrder
    nombre_asignatura?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    mov_asig_au?: mov_asig_auOrderByRelationAggregateInput
    preofe_mate?: preofe_mateOrderByRelationAggregateInput
    _relevance?: asignaturasOrderByRelevanceInput
  }

  export type asignaturasWhereUniqueInput = Prisma.AtLeast<{
    pk_asignatura?: number
    AND?: asignaturasWhereInput | asignaturasWhereInput[]
    OR?: asignaturasWhereInput[]
    NOT?: asignaturasWhereInput | asignaturasWhereInput[]
    nombre_asignatura?: StringNullableFilter<"asignaturas"> | string | null
    codigo?: StringNullableFilter<"asignaturas"> | string | null
    mov_asig_au?: Mov_asig_auListRelationFilter
    preofe_mate?: Preofe_mateListRelationFilter
  }, "pk_asignatura">

  export type asignaturasOrderByWithAggregationInput = {
    pk_asignatura?: SortOrder
    nombre_asignatura?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    _count?: asignaturasCountOrderByAggregateInput
    _avg?: asignaturasAvgOrderByAggregateInput
    _max?: asignaturasMaxOrderByAggregateInput
    _min?: asignaturasMinOrderByAggregateInput
    _sum?: asignaturasSumOrderByAggregateInput
  }

  export type asignaturasScalarWhereWithAggregatesInput = {
    AND?: asignaturasScalarWhereWithAggregatesInput | asignaturasScalarWhereWithAggregatesInput[]
    OR?: asignaturasScalarWhereWithAggregatesInput[]
    NOT?: asignaturasScalarWhereWithAggregatesInput | asignaturasScalarWhereWithAggregatesInput[]
    pk_asignatura?: IntWithAggregatesFilter<"asignaturas"> | number
    nombre_asignatura?: StringNullableWithAggregatesFilter<"asignaturas"> | string | null
    codigo?: StringNullableWithAggregatesFilter<"asignaturas"> | string | null
  }

  export type aulasWhereInput = {
    AND?: aulasWhereInput | aulasWhereInput[]
    OR?: aulasWhereInput[]
    NOT?: aulasWhereInput | aulasWhereInput[]
    pk_aula?: IntFilter<"aulas"> | number
    nombre_aula?: StringNullableFilter<"aulas"> | string | null
    capacidad?: IntNullableFilter<"aulas"> | number | null
    mov_asig_au?: Mov_asig_auListRelationFilter
  }

  export type aulasOrderByWithRelationInput = {
    pk_aula?: SortOrder
    nombre_aula?: SortOrderInput | SortOrder
    capacidad?: SortOrderInput | SortOrder
    mov_asig_au?: mov_asig_auOrderByRelationAggregateInput
    _relevance?: aulasOrderByRelevanceInput
  }

  export type aulasWhereUniqueInput = Prisma.AtLeast<{
    pk_aula?: number
    AND?: aulasWhereInput | aulasWhereInput[]
    OR?: aulasWhereInput[]
    NOT?: aulasWhereInput | aulasWhereInput[]
    nombre_aula?: StringNullableFilter<"aulas"> | string | null
    capacidad?: IntNullableFilter<"aulas"> | number | null
    mov_asig_au?: Mov_asig_auListRelationFilter
  }, "pk_aula">

  export type aulasOrderByWithAggregationInput = {
    pk_aula?: SortOrder
    nombre_aula?: SortOrderInput | SortOrder
    capacidad?: SortOrderInput | SortOrder
    _count?: aulasCountOrderByAggregateInput
    _avg?: aulasAvgOrderByAggregateInput
    _max?: aulasMaxOrderByAggregateInput
    _min?: aulasMinOrderByAggregateInput
    _sum?: aulasSumOrderByAggregateInput
  }

  export type aulasScalarWhereWithAggregatesInput = {
    AND?: aulasScalarWhereWithAggregatesInput | aulasScalarWhereWithAggregatesInput[]
    OR?: aulasScalarWhereWithAggregatesInput[]
    NOT?: aulasScalarWhereWithAggregatesInput | aulasScalarWhereWithAggregatesInput[]
    pk_aula?: IntWithAggregatesFilter<"aulas"> | number
    nombre_aula?: StringNullableWithAggregatesFilter<"aulas"> | string | null
    capacidad?: IntNullableWithAggregatesFilter<"aulas"> | number | null
  }

  export type cargoWhereInput = {
    AND?: cargoWhereInput | cargoWhereInput[]
    OR?: cargoWhereInput[]
    NOT?: cargoWhereInput | cargoWhereInput[]
    pk_cargo?: IntFilter<"cargo"> | number
    nombre_cargo?: StringNullableFilter<"cargo"> | string | null
  }

  export type cargoOrderByWithRelationInput = {
    pk_cargo?: SortOrder
    nombre_cargo?: SortOrderInput | SortOrder
    _relevance?: cargoOrderByRelevanceInput
  }

  export type cargoWhereUniqueInput = Prisma.AtLeast<{
    pk_cargo?: number
    AND?: cargoWhereInput | cargoWhereInput[]
    OR?: cargoWhereInput[]
    NOT?: cargoWhereInput | cargoWhereInput[]
    nombre_cargo?: StringNullableFilter<"cargo"> | string | null
  }, "pk_cargo">

  export type cargoOrderByWithAggregationInput = {
    pk_cargo?: SortOrder
    nombre_cargo?: SortOrderInput | SortOrder
    _count?: cargoCountOrderByAggregateInput
    _avg?: cargoAvgOrderByAggregateInput
    _max?: cargoMaxOrderByAggregateInput
    _min?: cargoMinOrderByAggregateInput
    _sum?: cargoSumOrderByAggregateInput
  }

  export type cargoScalarWhereWithAggregatesInput = {
    AND?: cargoScalarWhereWithAggregatesInput | cargoScalarWhereWithAggregatesInput[]
    OR?: cargoScalarWhereWithAggregatesInput[]
    NOT?: cargoScalarWhereWithAggregatesInput | cargoScalarWhereWithAggregatesInput[]
    pk_cargo?: IntWithAggregatesFilter<"cargo"> | number
    nombre_cargo?: StringNullableWithAggregatesFilter<"cargo"> | string | null
  }

  export type ciaWhereInput = {
    AND?: ciaWhereInput | ciaWhereInput[]
    OR?: ciaWhereInput[]
    NOT?: ciaWhereInput | ciaWhereInput[]
    pk_cia?: IntFilter<"cia"> | number
    nombre_cia?: StringNullableFilter<"cia"> | string | null
    direccion?: StringNullableFilter<"cia"> | string | null
    telefono?: StringNullableFilter<"cia"> | string | null
  }

  export type ciaOrderByWithRelationInput = {
    pk_cia?: SortOrder
    nombre_cia?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _relevance?: ciaOrderByRelevanceInput
  }

  export type ciaWhereUniqueInput = Prisma.AtLeast<{
    pk_cia?: number
    AND?: ciaWhereInput | ciaWhereInput[]
    OR?: ciaWhereInput[]
    NOT?: ciaWhereInput | ciaWhereInput[]
    nombre_cia?: StringNullableFilter<"cia"> | string | null
    direccion?: StringNullableFilter<"cia"> | string | null
    telefono?: StringNullableFilter<"cia"> | string | null
  }, "pk_cia">

  export type ciaOrderByWithAggregationInput = {
    pk_cia?: SortOrder
    nombre_cia?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: ciaCountOrderByAggregateInput
    _avg?: ciaAvgOrderByAggregateInput
    _max?: ciaMaxOrderByAggregateInput
    _min?: ciaMinOrderByAggregateInput
    _sum?: ciaSumOrderByAggregateInput
  }

  export type ciaScalarWhereWithAggregatesInput = {
    AND?: ciaScalarWhereWithAggregatesInput | ciaScalarWhereWithAggregatesInput[]
    OR?: ciaScalarWhereWithAggregatesInput[]
    NOT?: ciaScalarWhereWithAggregatesInput | ciaScalarWhereWithAggregatesInput[]
    pk_cia?: IntWithAggregatesFilter<"cia"> | number
    nombre_cia?: StringNullableWithAggregatesFilter<"cia"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"cia"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"cia"> | string | null
  }

  export type civilWhereInput = {
    AND?: civilWhereInput | civilWhereInput[]
    OR?: civilWhereInput[]
    NOT?: civilWhereInput | civilWhereInput[]
    pk_id_civil?: IntFilter<"civil"> | number
    nombre_civil?: StringNullableFilter<"civil"> | string | null
    fk_id_estado?: IntNullableFilter<"civil"> | number | null
    estado?: XOR<EstadoNullableScalarRelationFilter, estadoWhereInput> | null
    datos?: DatosListRelationFilter
  }

  export type civilOrderByWithRelationInput = {
    pk_id_civil?: SortOrder
    nombre_civil?: SortOrderInput | SortOrder
    fk_id_estado?: SortOrderInput | SortOrder
    estado?: estadoOrderByWithRelationInput
    datos?: datosOrderByRelationAggregateInput
    _relevance?: civilOrderByRelevanceInput
  }

  export type civilWhereUniqueInput = Prisma.AtLeast<{
    pk_id_civil?: number
    AND?: civilWhereInput | civilWhereInput[]
    OR?: civilWhereInput[]
    NOT?: civilWhereInput | civilWhereInput[]
    nombre_civil?: StringNullableFilter<"civil"> | string | null
    fk_id_estado?: IntNullableFilter<"civil"> | number | null
    estado?: XOR<EstadoNullableScalarRelationFilter, estadoWhereInput> | null
    datos?: DatosListRelationFilter
  }, "pk_id_civil">

  export type civilOrderByWithAggregationInput = {
    pk_id_civil?: SortOrder
    nombre_civil?: SortOrderInput | SortOrder
    fk_id_estado?: SortOrderInput | SortOrder
    _count?: civilCountOrderByAggregateInput
    _avg?: civilAvgOrderByAggregateInput
    _max?: civilMaxOrderByAggregateInput
    _min?: civilMinOrderByAggregateInput
    _sum?: civilSumOrderByAggregateInput
  }

  export type civilScalarWhereWithAggregatesInput = {
    AND?: civilScalarWhereWithAggregatesInput | civilScalarWhereWithAggregatesInput[]
    OR?: civilScalarWhereWithAggregatesInput[]
    NOT?: civilScalarWhereWithAggregatesInput | civilScalarWhereWithAggregatesInput[]
    pk_id_civil?: IntWithAggregatesFilter<"civil"> | number
    nombre_civil?: StringNullableWithAggregatesFilter<"civil"> | string | null
    fk_id_estado?: IntNullableWithAggregatesFilter<"civil"> | number | null
  }

  export type datosWhereInput = {
    AND?: datosWhereInput | datosWhereInput[]
    OR?: datosWhereInput[]
    NOT?: datosWhereInput | datosWhereInput[]
    pk_dato?: IntFilter<"datos"> | number
    nombre?: StringNullableFilter<"datos"> | string | null
    apellido?: StringNullableFilter<"datos"> | string | null
    fk_id_doc?: IntNullableFilter<"datos"> | number | null
    fk_id_civil?: IntNullableFilter<"datos"> | number | null
    fk_id_gene?: IntNullableFilter<"datos"> | number | null
    correo?: StringNullableFilter<"datos"> | string | null
    telefono?: StringNullableFilter<"datos"> | string | null
    fk_pregrado?: IntNullableFilter<"datos"> | number | null
    fk_id_semestre?: IntNullableFilter<"datos"> | number | null
    fk_id_tipo_status?: IntNullableFilter<"datos"> | number | null
    asignatura?: StringNullableFilter<"datos"> | string | null
    salon?: StringNullableFilter<"datos"> | string | null
    dia?: StringNullableFilter<"datos"> | string | null
    hora_inicio?: StringNullableFilter<"datos"> | string | null
    hora_fin?: StringNullableFilter<"datos"> | string | null
    documento?: XOR<DocumentoNullableScalarRelationFilter, documentoWhereInput> | null
    civil?: XOR<CivilNullableScalarRelationFilter, civilWhereInput> | null
    genero?: XOR<GeneroNullableScalarRelationFilter, generoWhereInput> | null
    pregrado?: XOR<PregradoNullableScalarRelationFilter, pregradoWhereInput> | null
    semestre?: XOR<SemestreNullableScalarRelationFilter, semestreWhereInput> | null
    tipo_status?: XOR<Tipo_statusNullableScalarRelationFilter, tipo_statusWhereInput> | null
  }

  export type datosOrderByWithRelationInput = {
    pk_dato?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    fk_id_doc?: SortOrderInput | SortOrder
    fk_id_civil?: SortOrderInput | SortOrder
    fk_id_gene?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fk_pregrado?: SortOrderInput | SortOrder
    fk_id_semestre?: SortOrderInput | SortOrder
    fk_id_tipo_status?: SortOrderInput | SortOrder
    asignatura?: SortOrderInput | SortOrder
    salon?: SortOrderInput | SortOrder
    dia?: SortOrderInput | SortOrder
    hora_inicio?: SortOrderInput | SortOrder
    hora_fin?: SortOrderInput | SortOrder
    documento?: documentoOrderByWithRelationInput
    civil?: civilOrderByWithRelationInput
    genero?: generoOrderByWithRelationInput
    pregrado?: pregradoOrderByWithRelationInput
    semestre?: semestreOrderByWithRelationInput
    tipo_status?: tipo_statusOrderByWithRelationInput
    _relevance?: datosOrderByRelevanceInput
  }

  export type datosWhereUniqueInput = Prisma.AtLeast<{
    pk_dato?: number
    AND?: datosWhereInput | datosWhereInput[]
    OR?: datosWhereInput[]
    NOT?: datosWhereInput | datosWhereInput[]
    nombre?: StringNullableFilter<"datos"> | string | null
    apellido?: StringNullableFilter<"datos"> | string | null
    fk_id_doc?: IntNullableFilter<"datos"> | number | null
    fk_id_civil?: IntNullableFilter<"datos"> | number | null
    fk_id_gene?: IntNullableFilter<"datos"> | number | null
    correo?: StringNullableFilter<"datos"> | string | null
    telefono?: StringNullableFilter<"datos"> | string | null
    fk_pregrado?: IntNullableFilter<"datos"> | number | null
    fk_id_semestre?: IntNullableFilter<"datos"> | number | null
    fk_id_tipo_status?: IntNullableFilter<"datos"> | number | null
    asignatura?: StringNullableFilter<"datos"> | string | null
    salon?: StringNullableFilter<"datos"> | string | null
    dia?: StringNullableFilter<"datos"> | string | null
    hora_inicio?: StringNullableFilter<"datos"> | string | null
    hora_fin?: StringNullableFilter<"datos"> | string | null
    documento?: XOR<DocumentoNullableScalarRelationFilter, documentoWhereInput> | null
    civil?: XOR<CivilNullableScalarRelationFilter, civilWhereInput> | null
    genero?: XOR<GeneroNullableScalarRelationFilter, generoWhereInput> | null
    pregrado?: XOR<PregradoNullableScalarRelationFilter, pregradoWhereInput> | null
    semestre?: XOR<SemestreNullableScalarRelationFilter, semestreWhereInput> | null
    tipo_status?: XOR<Tipo_statusNullableScalarRelationFilter, tipo_statusWhereInput> | null
  }, "pk_dato">

  export type datosOrderByWithAggregationInput = {
    pk_dato?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    fk_id_doc?: SortOrderInput | SortOrder
    fk_id_civil?: SortOrderInput | SortOrder
    fk_id_gene?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fk_pregrado?: SortOrderInput | SortOrder
    fk_id_semestre?: SortOrderInput | SortOrder
    fk_id_tipo_status?: SortOrderInput | SortOrder
    asignatura?: SortOrderInput | SortOrder
    salon?: SortOrderInput | SortOrder
    dia?: SortOrderInput | SortOrder
    hora_inicio?: SortOrderInput | SortOrder
    hora_fin?: SortOrderInput | SortOrder
    _count?: datosCountOrderByAggregateInput
    _avg?: datosAvgOrderByAggregateInput
    _max?: datosMaxOrderByAggregateInput
    _min?: datosMinOrderByAggregateInput
    _sum?: datosSumOrderByAggregateInput
  }

  export type datosScalarWhereWithAggregatesInput = {
    AND?: datosScalarWhereWithAggregatesInput | datosScalarWhereWithAggregatesInput[]
    OR?: datosScalarWhereWithAggregatesInput[]
    NOT?: datosScalarWhereWithAggregatesInput | datosScalarWhereWithAggregatesInput[]
    pk_dato?: IntWithAggregatesFilter<"datos"> | number
    nombre?: StringNullableWithAggregatesFilter<"datos"> | string | null
    apellido?: StringNullableWithAggregatesFilter<"datos"> | string | null
    fk_id_doc?: IntNullableWithAggregatesFilter<"datos"> | number | null
    fk_id_civil?: IntNullableWithAggregatesFilter<"datos"> | number | null
    fk_id_gene?: IntNullableWithAggregatesFilter<"datos"> | number | null
    correo?: StringNullableWithAggregatesFilter<"datos"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"datos"> | string | null
    fk_pregrado?: IntNullableWithAggregatesFilter<"datos"> | number | null
    fk_id_semestre?: IntNullableWithAggregatesFilter<"datos"> | number | null
    fk_id_tipo_status?: IntNullableWithAggregatesFilter<"datos"> | number | null
    asignatura?: StringNullableWithAggregatesFilter<"datos"> | string | null
    salon?: StringNullableWithAggregatesFilter<"datos"> | string | null
    dia?: StringNullableWithAggregatesFilter<"datos"> | string | null
    hora_inicio?: StringNullableWithAggregatesFilter<"datos"> | string | null
    hora_fin?: StringNullableWithAggregatesFilter<"datos"> | string | null
  }

  export type documentoWhereInput = {
    AND?: documentoWhereInput | documentoWhereInput[]
    OR?: documentoWhereInput[]
    NOT?: documentoWhereInput | documentoWhereInput[]
    pk_id_doc?: IntFilter<"documento"> | number
    nombre_documento?: StringNullableFilter<"documento"> | string | null
    fk_id_estado?: IntNullableFilter<"documento"> | number | null
    datos?: DatosListRelationFilter
    estado?: XOR<EstadoNullableScalarRelationFilter, estadoWhereInput> | null
  }

  export type documentoOrderByWithRelationInput = {
    pk_id_doc?: SortOrder
    nombre_documento?: SortOrderInput | SortOrder
    fk_id_estado?: SortOrderInput | SortOrder
    datos?: datosOrderByRelationAggregateInput
    estado?: estadoOrderByWithRelationInput
    _relevance?: documentoOrderByRelevanceInput
  }

  export type documentoWhereUniqueInput = Prisma.AtLeast<{
    pk_id_doc?: number
    AND?: documentoWhereInput | documentoWhereInput[]
    OR?: documentoWhereInput[]
    NOT?: documentoWhereInput | documentoWhereInput[]
    nombre_documento?: StringNullableFilter<"documento"> | string | null
    fk_id_estado?: IntNullableFilter<"documento"> | number | null
    datos?: DatosListRelationFilter
    estado?: XOR<EstadoNullableScalarRelationFilter, estadoWhereInput> | null
  }, "pk_id_doc">

  export type documentoOrderByWithAggregationInput = {
    pk_id_doc?: SortOrder
    nombre_documento?: SortOrderInput | SortOrder
    fk_id_estado?: SortOrderInput | SortOrder
    _count?: documentoCountOrderByAggregateInput
    _avg?: documentoAvgOrderByAggregateInput
    _max?: documentoMaxOrderByAggregateInput
    _min?: documentoMinOrderByAggregateInput
    _sum?: documentoSumOrderByAggregateInput
  }

  export type documentoScalarWhereWithAggregatesInput = {
    AND?: documentoScalarWhereWithAggregatesInput | documentoScalarWhereWithAggregatesInput[]
    OR?: documentoScalarWhereWithAggregatesInput[]
    NOT?: documentoScalarWhereWithAggregatesInput | documentoScalarWhereWithAggregatesInput[]
    pk_id_doc?: IntWithAggregatesFilter<"documento"> | number
    nombre_documento?: StringNullableWithAggregatesFilter<"documento"> | string | null
    fk_id_estado?: IntNullableWithAggregatesFilter<"documento"> | number | null
  }

  export type estadoWhereInput = {
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    pk_id_estado?: IntFilter<"estado"> | number
    nombre?: StringNullableFilter<"estado"> | string | null
    civil?: CivilListRelationFilter
    documento?: DocumentoListRelationFilter
    genero?: GeneroListRelationFilter
  }

  export type estadoOrderByWithRelationInput = {
    pk_id_estado?: SortOrder
    nombre?: SortOrderInput | SortOrder
    civil?: civilOrderByRelationAggregateInput
    documento?: documentoOrderByRelationAggregateInput
    genero?: generoOrderByRelationAggregateInput
    _relevance?: estadoOrderByRelevanceInput
  }

  export type estadoWhereUniqueInput = Prisma.AtLeast<{
    pk_id_estado?: number
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    nombre?: StringNullableFilter<"estado"> | string | null
    civil?: CivilListRelationFilter
    documento?: DocumentoListRelationFilter
    genero?: GeneroListRelationFilter
  }, "pk_id_estado">

  export type estadoOrderByWithAggregationInput = {
    pk_id_estado?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: estadoCountOrderByAggregateInput
    _avg?: estadoAvgOrderByAggregateInput
    _max?: estadoMaxOrderByAggregateInput
    _min?: estadoMinOrderByAggregateInput
    _sum?: estadoSumOrderByAggregateInput
  }

  export type estadoScalarWhereWithAggregatesInput = {
    AND?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    OR?: estadoScalarWhereWithAggregatesInput[]
    NOT?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    pk_id_estado?: IntWithAggregatesFilter<"estado"> | number
    nombre?: StringNullableWithAggregatesFilter<"estado"> | string | null
  }

  export type generoWhereInput = {
    AND?: generoWhereInput | generoWhereInput[]
    OR?: generoWhereInput[]
    NOT?: generoWhereInput | generoWhereInput[]
    pk_id_gene?: IntFilter<"genero"> | number
    nom_genero?: StringNullableFilter<"genero"> | string | null
    fk_id_estado?: IntNullableFilter<"genero"> | number | null
    datos?: DatosListRelationFilter
    estado?: XOR<EstadoNullableScalarRelationFilter, estadoWhereInput> | null
  }

  export type generoOrderByWithRelationInput = {
    pk_id_gene?: SortOrder
    nom_genero?: SortOrderInput | SortOrder
    fk_id_estado?: SortOrderInput | SortOrder
    datos?: datosOrderByRelationAggregateInput
    estado?: estadoOrderByWithRelationInput
    _relevance?: generoOrderByRelevanceInput
  }

  export type generoWhereUniqueInput = Prisma.AtLeast<{
    pk_id_gene?: number
    AND?: generoWhereInput | generoWhereInput[]
    OR?: generoWhereInput[]
    NOT?: generoWhereInput | generoWhereInput[]
    nom_genero?: StringNullableFilter<"genero"> | string | null
    fk_id_estado?: IntNullableFilter<"genero"> | number | null
    datos?: DatosListRelationFilter
    estado?: XOR<EstadoNullableScalarRelationFilter, estadoWhereInput> | null
  }, "pk_id_gene">

  export type generoOrderByWithAggregationInput = {
    pk_id_gene?: SortOrder
    nom_genero?: SortOrderInput | SortOrder
    fk_id_estado?: SortOrderInput | SortOrder
    _count?: generoCountOrderByAggregateInput
    _avg?: generoAvgOrderByAggregateInput
    _max?: generoMaxOrderByAggregateInput
    _min?: generoMinOrderByAggregateInput
    _sum?: generoSumOrderByAggregateInput
  }

  export type generoScalarWhereWithAggregatesInput = {
    AND?: generoScalarWhereWithAggregatesInput | generoScalarWhereWithAggregatesInput[]
    OR?: generoScalarWhereWithAggregatesInput[]
    NOT?: generoScalarWhereWithAggregatesInput | generoScalarWhereWithAggregatesInput[]
    pk_id_gene?: IntWithAggregatesFilter<"genero"> | number
    nom_genero?: StringNullableWithAggregatesFilter<"genero"> | string | null
    fk_id_estado?: IntNullableWithAggregatesFilter<"genero"> | number | null
  }

  export type horariosWhereInput = {
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    pk_horario?: IntFilter<"horarios"> | number
    dia?: StringNullableFilter<"horarios"> | string | null
    hora_inicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    hora_fin?: DateTimeNullableFilter<"horarios"> | Date | string | null
    mov_asig_au?: Mov_asig_auListRelationFilter
  }

  export type horariosOrderByWithRelationInput = {
    pk_horario?: SortOrder
    dia?: SortOrderInput | SortOrder
    hora_inicio?: SortOrderInput | SortOrder
    hora_fin?: SortOrderInput | SortOrder
    mov_asig_au?: mov_asig_auOrderByRelationAggregateInput
    _relevance?: horariosOrderByRelevanceInput
  }

  export type horariosWhereUniqueInput = Prisma.AtLeast<{
    pk_horario?: number
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    dia?: StringNullableFilter<"horarios"> | string | null
    hora_inicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    hora_fin?: DateTimeNullableFilter<"horarios"> | Date | string | null
    mov_asig_au?: Mov_asig_auListRelationFilter
  }, "pk_horario">

  export type horariosOrderByWithAggregationInput = {
    pk_horario?: SortOrder
    dia?: SortOrderInput | SortOrder
    hora_inicio?: SortOrderInput | SortOrder
    hora_fin?: SortOrderInput | SortOrder
    _count?: horariosCountOrderByAggregateInput
    _avg?: horariosAvgOrderByAggregateInput
    _max?: horariosMaxOrderByAggregateInput
    _min?: horariosMinOrderByAggregateInput
    _sum?: horariosSumOrderByAggregateInput
  }

  export type horariosScalarWhereWithAggregatesInput = {
    AND?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    OR?: horariosScalarWhereWithAggregatesInput[]
    NOT?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    pk_horario?: IntWithAggregatesFilter<"horarios"> | number
    dia?: StringNullableWithAggregatesFilter<"horarios"> | string | null
    hora_inicio?: DateTimeNullableWithAggregatesFilter<"horarios"> | Date | string | null
    hora_fin?: DateTimeNullableWithAggregatesFilter<"horarios"> | Date | string | null
  }

  export type laboratorioWhereInput = {
    AND?: laboratorioWhereInput | laboratorioWhereInput[]
    OR?: laboratorioWhereInput[]
    NOT?: laboratorioWhereInput | laboratorioWhereInput[]
    pk_lab?: IntFilter<"laboratorio"> | number
    nombre_lab?: StringNullableFilter<"laboratorio"> | string | null
    capacidad?: IntNullableFilter<"laboratorio"> | number | null
  }

  export type laboratorioOrderByWithRelationInput = {
    pk_lab?: SortOrder
    nombre_lab?: SortOrderInput | SortOrder
    capacidad?: SortOrderInput | SortOrder
    _relevance?: laboratorioOrderByRelevanceInput
  }

  export type laboratorioWhereUniqueInput = Prisma.AtLeast<{
    pk_lab?: number
    AND?: laboratorioWhereInput | laboratorioWhereInput[]
    OR?: laboratorioWhereInput[]
    NOT?: laboratorioWhereInput | laboratorioWhereInput[]
    nombre_lab?: StringNullableFilter<"laboratorio"> | string | null
    capacidad?: IntNullableFilter<"laboratorio"> | number | null
  }, "pk_lab">

  export type laboratorioOrderByWithAggregationInput = {
    pk_lab?: SortOrder
    nombre_lab?: SortOrderInput | SortOrder
    capacidad?: SortOrderInput | SortOrder
    _count?: laboratorioCountOrderByAggregateInput
    _avg?: laboratorioAvgOrderByAggregateInput
    _max?: laboratorioMaxOrderByAggregateInput
    _min?: laboratorioMinOrderByAggregateInput
    _sum?: laboratorioSumOrderByAggregateInput
  }

  export type laboratorioScalarWhereWithAggregatesInput = {
    AND?: laboratorioScalarWhereWithAggregatesInput | laboratorioScalarWhereWithAggregatesInput[]
    OR?: laboratorioScalarWhereWithAggregatesInput[]
    NOT?: laboratorioScalarWhereWithAggregatesInput | laboratorioScalarWhereWithAggregatesInput[]
    pk_lab?: IntWithAggregatesFilter<"laboratorio"> | number
    nombre_lab?: StringNullableWithAggregatesFilter<"laboratorio"> | string | null
    capacidad?: IntNullableWithAggregatesFilter<"laboratorio"> | number | null
  }

  export type modulosWhereInput = {
    AND?: modulosWhereInput | modulosWhereInput[]
    OR?: modulosWhereInput[]
    NOT?: modulosWhereInput | modulosWhereInput[]
    pk_modulos?: IntFilter<"modulos"> | number
    nombre?: StringNullableFilter<"modulos"> | string | null
    acceso?: AccesoListRelationFilter
  }

  export type modulosOrderByWithRelationInput = {
    pk_modulos?: SortOrder
    nombre?: SortOrderInput | SortOrder
    acceso?: accesoOrderByRelationAggregateInput
    _relevance?: modulosOrderByRelevanceInput
  }

  export type modulosWhereUniqueInput = Prisma.AtLeast<{
    pk_modulos?: number
    AND?: modulosWhereInput | modulosWhereInput[]
    OR?: modulosWhereInput[]
    NOT?: modulosWhereInput | modulosWhereInput[]
    nombre?: StringNullableFilter<"modulos"> | string | null
    acceso?: AccesoListRelationFilter
  }, "pk_modulos">

  export type modulosOrderByWithAggregationInput = {
    pk_modulos?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: modulosCountOrderByAggregateInput
    _avg?: modulosAvgOrderByAggregateInput
    _max?: modulosMaxOrderByAggregateInput
    _min?: modulosMinOrderByAggregateInput
    _sum?: modulosSumOrderByAggregateInput
  }

  export type modulosScalarWhereWithAggregatesInput = {
    AND?: modulosScalarWhereWithAggregatesInput | modulosScalarWhereWithAggregatesInput[]
    OR?: modulosScalarWhereWithAggregatesInput[]
    NOT?: modulosScalarWhereWithAggregatesInput | modulosScalarWhereWithAggregatesInput[]
    pk_modulos?: IntWithAggregatesFilter<"modulos"> | number
    nombre?: StringNullableWithAggregatesFilter<"modulos"> | string | null
  }

  export type mov_asig_auWhereInput = {
    AND?: mov_asig_auWhereInput | mov_asig_auWhereInput[]
    OR?: mov_asig_auWhereInput[]
    NOT?: mov_asig_auWhereInput | mov_asig_auWhereInput[]
    pk_mov?: IntFilter<"mov_asig_au"> | number
    fk_asignatura?: IntNullableFilter<"mov_asig_au"> | number | null
    fk_aula?: IntNullableFilter<"mov_asig_au"> | number | null
    fk_horario?: IntNullableFilter<"mov_asig_au"> | number | null
    asignaturas?: XOR<AsignaturasNullableScalarRelationFilter, asignaturasWhereInput> | null
    aulas?: XOR<AulasNullableScalarRelationFilter, aulasWhereInput> | null
    horarios?: XOR<HorariosNullableScalarRelationFilter, horariosWhereInput> | null
  }

  export type mov_asig_auOrderByWithRelationInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrderInput | SortOrder
    fk_aula?: SortOrderInput | SortOrder
    fk_horario?: SortOrderInput | SortOrder
    asignaturas?: asignaturasOrderByWithRelationInput
    aulas?: aulasOrderByWithRelationInput
    horarios?: horariosOrderByWithRelationInput
  }

  export type mov_asig_auWhereUniqueInput = Prisma.AtLeast<{
    pk_mov?: number
    AND?: mov_asig_auWhereInput | mov_asig_auWhereInput[]
    OR?: mov_asig_auWhereInput[]
    NOT?: mov_asig_auWhereInput | mov_asig_auWhereInput[]
    fk_asignatura?: IntNullableFilter<"mov_asig_au"> | number | null
    fk_aula?: IntNullableFilter<"mov_asig_au"> | number | null
    fk_horario?: IntNullableFilter<"mov_asig_au"> | number | null
    asignaturas?: XOR<AsignaturasNullableScalarRelationFilter, asignaturasWhereInput> | null
    aulas?: XOR<AulasNullableScalarRelationFilter, aulasWhereInput> | null
    horarios?: XOR<HorariosNullableScalarRelationFilter, horariosWhereInput> | null
  }, "pk_mov">

  export type mov_asig_auOrderByWithAggregationInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrderInput | SortOrder
    fk_aula?: SortOrderInput | SortOrder
    fk_horario?: SortOrderInput | SortOrder
    _count?: mov_asig_auCountOrderByAggregateInput
    _avg?: mov_asig_auAvgOrderByAggregateInput
    _max?: mov_asig_auMaxOrderByAggregateInput
    _min?: mov_asig_auMinOrderByAggregateInput
    _sum?: mov_asig_auSumOrderByAggregateInput
  }

  export type mov_asig_auScalarWhereWithAggregatesInput = {
    AND?: mov_asig_auScalarWhereWithAggregatesInput | mov_asig_auScalarWhereWithAggregatesInput[]
    OR?: mov_asig_auScalarWhereWithAggregatesInput[]
    NOT?: mov_asig_auScalarWhereWithAggregatesInput | mov_asig_auScalarWhereWithAggregatesInput[]
    pk_mov?: IntWithAggregatesFilter<"mov_asig_au"> | number
    fk_asignatura?: IntNullableWithAggregatesFilter<"mov_asig_au"> | number | null
    fk_aula?: IntNullableWithAggregatesFilter<"mov_asig_au"> | number | null
    fk_horario?: IntNullableWithAggregatesFilter<"mov_asig_au"> | number | null
  }

  export type pregradoWhereInput = {
    AND?: pregradoWhereInput | pregradoWhereInput[]
    OR?: pregradoWhereInput[]
    NOT?: pregradoWhereInput | pregradoWhereInput[]
    pk_pregrado?: IntFilter<"pregrado"> | number
    nombre_pregrado?: StringNullableFilter<"pregrado"> | string | null
    preofe_mate?: Preofe_mateListRelationFilter
    semestre?: SemestreListRelationFilter
    datos?: DatosListRelationFilter
  }

  export type pregradoOrderByWithRelationInput = {
    pk_pregrado?: SortOrder
    nombre_pregrado?: SortOrderInput | SortOrder
    preofe_mate?: preofe_mateOrderByRelationAggregateInput
    semestre?: semestreOrderByRelationAggregateInput
    datos?: datosOrderByRelationAggregateInput
    _relevance?: pregradoOrderByRelevanceInput
  }

  export type pregradoWhereUniqueInput = Prisma.AtLeast<{
    pk_pregrado?: number
    AND?: pregradoWhereInput | pregradoWhereInput[]
    OR?: pregradoWhereInput[]
    NOT?: pregradoWhereInput | pregradoWhereInput[]
    nombre_pregrado?: StringNullableFilter<"pregrado"> | string | null
    preofe_mate?: Preofe_mateListRelationFilter
    semestre?: SemestreListRelationFilter
    datos?: DatosListRelationFilter
  }, "pk_pregrado">

  export type pregradoOrderByWithAggregationInput = {
    pk_pregrado?: SortOrder
    nombre_pregrado?: SortOrderInput | SortOrder
    _count?: pregradoCountOrderByAggregateInput
    _avg?: pregradoAvgOrderByAggregateInput
    _max?: pregradoMaxOrderByAggregateInput
    _min?: pregradoMinOrderByAggregateInput
    _sum?: pregradoSumOrderByAggregateInput
  }

  export type pregradoScalarWhereWithAggregatesInput = {
    AND?: pregradoScalarWhereWithAggregatesInput | pregradoScalarWhereWithAggregatesInput[]
    OR?: pregradoScalarWhereWithAggregatesInput[]
    NOT?: pregradoScalarWhereWithAggregatesInput | pregradoScalarWhereWithAggregatesInput[]
    pk_pregrado?: IntWithAggregatesFilter<"pregrado"> | number
    nombre_pregrado?: StringNullableWithAggregatesFilter<"pregrado"> | string | null
  }

  export type preofe_mateWhereInput = {
    AND?: preofe_mateWhereInput | preofe_mateWhereInput[]
    OR?: preofe_mateWhereInput[]
    NOT?: preofe_mateWhereInput | preofe_mateWhereInput[]
    pk_preofe?: IntFilter<"preofe_mate"> | number
    fk_pregrado?: IntNullableFilter<"preofe_mate"> | number | null
    fk_asignatura?: IntNullableFilter<"preofe_mate"> | number | null
    pregrado?: XOR<PregradoNullableScalarRelationFilter, pregradoWhereInput> | null
    asignaturas?: XOR<AsignaturasNullableScalarRelationFilter, asignaturasWhereInput> | null
  }

  export type preofe_mateOrderByWithRelationInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrderInput | SortOrder
    fk_asignatura?: SortOrderInput | SortOrder
    pregrado?: pregradoOrderByWithRelationInput
    asignaturas?: asignaturasOrderByWithRelationInput
  }

  export type preofe_mateWhereUniqueInput = Prisma.AtLeast<{
    pk_preofe?: number
    AND?: preofe_mateWhereInput | preofe_mateWhereInput[]
    OR?: preofe_mateWhereInput[]
    NOT?: preofe_mateWhereInput | preofe_mateWhereInput[]
    fk_pregrado?: IntNullableFilter<"preofe_mate"> | number | null
    fk_asignatura?: IntNullableFilter<"preofe_mate"> | number | null
    pregrado?: XOR<PregradoNullableScalarRelationFilter, pregradoWhereInput> | null
    asignaturas?: XOR<AsignaturasNullableScalarRelationFilter, asignaturasWhereInput> | null
  }, "pk_preofe">

  export type preofe_mateOrderByWithAggregationInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrderInput | SortOrder
    fk_asignatura?: SortOrderInput | SortOrder
    _count?: preofe_mateCountOrderByAggregateInput
    _avg?: preofe_mateAvgOrderByAggregateInput
    _max?: preofe_mateMaxOrderByAggregateInput
    _min?: preofe_mateMinOrderByAggregateInput
    _sum?: preofe_mateSumOrderByAggregateInput
  }

  export type preofe_mateScalarWhereWithAggregatesInput = {
    AND?: preofe_mateScalarWhereWithAggregatesInput | preofe_mateScalarWhereWithAggregatesInput[]
    OR?: preofe_mateScalarWhereWithAggregatesInput[]
    NOT?: preofe_mateScalarWhereWithAggregatesInput | preofe_mateScalarWhereWithAggregatesInput[]
    pk_preofe?: IntWithAggregatesFilter<"preofe_mate"> | number
    fk_pregrado?: IntNullableWithAggregatesFilter<"preofe_mate"> | number | null
    fk_asignatura?: IntNullableWithAggregatesFilter<"preofe_mate"> | number | null
  }

  export type semestreWhereInput = {
    AND?: semestreWhereInput | semestreWhereInput[]
    OR?: semestreWhereInput[]
    NOT?: semestreWhereInput | semestreWhereInput[]
    pk_semestre?: IntFilter<"semestre"> | number
    numero?: IntNullableFilter<"semestre"> | number | null
    fk_pregrado?: IntNullableFilter<"semestre"> | number | null
    pregrado?: XOR<PregradoNullableScalarRelationFilter, pregradoWhereInput> | null
    datos?: DatosListRelationFilter
  }

  export type semestreOrderByWithRelationInput = {
    pk_semestre?: SortOrder
    numero?: SortOrderInput | SortOrder
    fk_pregrado?: SortOrderInput | SortOrder
    pregrado?: pregradoOrderByWithRelationInput
    datos?: datosOrderByRelationAggregateInput
  }

  export type semestreWhereUniqueInput = Prisma.AtLeast<{
    pk_semestre?: number
    AND?: semestreWhereInput | semestreWhereInput[]
    OR?: semestreWhereInput[]
    NOT?: semestreWhereInput | semestreWhereInput[]
    numero?: IntNullableFilter<"semestre"> | number | null
    fk_pregrado?: IntNullableFilter<"semestre"> | number | null
    pregrado?: XOR<PregradoNullableScalarRelationFilter, pregradoWhereInput> | null
    datos?: DatosListRelationFilter
  }, "pk_semestre">

  export type semestreOrderByWithAggregationInput = {
    pk_semestre?: SortOrder
    numero?: SortOrderInput | SortOrder
    fk_pregrado?: SortOrderInput | SortOrder
    _count?: semestreCountOrderByAggregateInput
    _avg?: semestreAvgOrderByAggregateInput
    _max?: semestreMaxOrderByAggregateInput
    _min?: semestreMinOrderByAggregateInput
    _sum?: semestreSumOrderByAggregateInput
  }

  export type semestreScalarWhereWithAggregatesInput = {
    AND?: semestreScalarWhereWithAggregatesInput | semestreScalarWhereWithAggregatesInput[]
    OR?: semestreScalarWhereWithAggregatesInput[]
    NOT?: semestreScalarWhereWithAggregatesInput | semestreScalarWhereWithAggregatesInput[]
    pk_semestre?: IntWithAggregatesFilter<"semestre"> | number
    numero?: IntNullableWithAggregatesFilter<"semestre"> | number | null
    fk_pregrado?: IntNullableWithAggregatesFilter<"semestre"> | number | null
  }

  export type tipo_statusWhereInput = {
    AND?: tipo_statusWhereInput | tipo_statusWhereInput[]
    OR?: tipo_statusWhereInput[]
    NOT?: tipo_statusWhereInput | tipo_statusWhereInput[]
    pk_status?: IntFilter<"tipo_status"> | number
    nombre_status?: StringNullableFilter<"tipo_status"> | string | null
    datos?: DatosListRelationFilter
  }

  export type tipo_statusOrderByWithRelationInput = {
    pk_status?: SortOrder
    nombre_status?: SortOrderInput | SortOrder
    datos?: datosOrderByRelationAggregateInput
    _relevance?: tipo_statusOrderByRelevanceInput
  }

  export type tipo_statusWhereUniqueInput = Prisma.AtLeast<{
    pk_status?: number
    AND?: tipo_statusWhereInput | tipo_statusWhereInput[]
    OR?: tipo_statusWhereInput[]
    NOT?: tipo_statusWhereInput | tipo_statusWhereInput[]
    nombre_status?: StringNullableFilter<"tipo_status"> | string | null
    datos?: DatosListRelationFilter
  }, "pk_status">

  export type tipo_statusOrderByWithAggregationInput = {
    pk_status?: SortOrder
    nombre_status?: SortOrderInput | SortOrder
    _count?: tipo_statusCountOrderByAggregateInput
    _avg?: tipo_statusAvgOrderByAggregateInput
    _max?: tipo_statusMaxOrderByAggregateInput
    _min?: tipo_statusMinOrderByAggregateInput
    _sum?: tipo_statusSumOrderByAggregateInput
  }

  export type tipo_statusScalarWhereWithAggregatesInput = {
    AND?: tipo_statusScalarWhereWithAggregatesInput | tipo_statusScalarWhereWithAggregatesInput[]
    OR?: tipo_statusScalarWhereWithAggregatesInput[]
    NOT?: tipo_statusScalarWhereWithAggregatesInput | tipo_statusScalarWhereWithAggregatesInput[]
    pk_status?: IntWithAggregatesFilter<"tipo_status"> | number
    nombre_status?: StringNullableWithAggregatesFilter<"tipo_status"> | string | null
  }

  export type accesoCreateInput = {
    usuario?: string | null
    contrasena?: string | null
    modulos?: modulosCreateNestedOneWithoutAccesoInput
  }

  export type accesoUncheckedCreateInput = {
    pk_acceso?: number
    usuario?: string | null
    contrasena?: string | null
    fk_modulo?: number | null
  }

  export type accesoUpdateInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    modulos?: modulosUpdateOneWithoutAccesoNestedInput
  }

  export type accesoUncheckedUpdateInput = {
    pk_acceso?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    fk_modulo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type accesoCreateManyInput = {
    pk_acceso?: number
    usuario?: string | null
    contrasena?: string | null
    fk_modulo?: number | null
  }

  export type accesoUpdateManyMutationInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accesoUncheckedUpdateManyInput = {
    pk_acceso?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    fk_modulo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type asignaturasCreateInput = {
    nombre_asignatura?: string | null
    codigo?: string | null
    mov_asig_au?: mov_asig_auCreateNestedManyWithoutAsignaturasInput
    preofe_mate?: preofe_mateCreateNestedManyWithoutAsignaturasInput
  }

  export type asignaturasUncheckedCreateInput = {
    pk_asignatura?: number
    nombre_asignatura?: string | null
    codigo?: string | null
    mov_asig_au?: mov_asig_auUncheckedCreateNestedManyWithoutAsignaturasInput
    preofe_mate?: preofe_mateUncheckedCreateNestedManyWithoutAsignaturasInput
  }

  export type asignaturasUpdateInput = {
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    mov_asig_au?: mov_asig_auUpdateManyWithoutAsignaturasNestedInput
    preofe_mate?: preofe_mateUpdateManyWithoutAsignaturasNestedInput
  }

  export type asignaturasUncheckedUpdateInput = {
    pk_asignatura?: IntFieldUpdateOperationsInput | number
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    mov_asig_au?: mov_asig_auUncheckedUpdateManyWithoutAsignaturasNestedInput
    preofe_mate?: preofe_mateUncheckedUpdateManyWithoutAsignaturasNestedInput
  }

  export type asignaturasCreateManyInput = {
    pk_asignatura?: number
    nombre_asignatura?: string | null
    codigo?: string | null
  }

  export type asignaturasUpdateManyMutationInput = {
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type asignaturasUncheckedUpdateManyInput = {
    pk_asignatura?: IntFieldUpdateOperationsInput | number
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aulasCreateInput = {
    nombre_aula?: string | null
    capacidad?: number | null
    mov_asig_au?: mov_asig_auCreateNestedManyWithoutAulasInput
  }

  export type aulasUncheckedCreateInput = {
    pk_aula?: number
    nombre_aula?: string | null
    capacidad?: number | null
    mov_asig_au?: mov_asig_auUncheckedCreateNestedManyWithoutAulasInput
  }

  export type aulasUpdateInput = {
    nombre_aula?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    mov_asig_au?: mov_asig_auUpdateManyWithoutAulasNestedInput
  }

  export type aulasUncheckedUpdateInput = {
    pk_aula?: IntFieldUpdateOperationsInput | number
    nombre_aula?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    mov_asig_au?: mov_asig_auUncheckedUpdateManyWithoutAulasNestedInput
  }

  export type aulasCreateManyInput = {
    pk_aula?: number
    nombre_aula?: string | null
    capacidad?: number | null
  }

  export type aulasUpdateManyMutationInput = {
    nombre_aula?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aulasUncheckedUpdateManyInput = {
    pk_aula?: IntFieldUpdateOperationsInput | number
    nombre_aula?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cargoCreateInput = {
    nombre_cargo?: string | null
  }

  export type cargoUncheckedCreateInput = {
    pk_cargo?: number
    nombre_cargo?: string | null
  }

  export type cargoUpdateInput = {
    nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cargoUncheckedUpdateInput = {
    pk_cargo?: IntFieldUpdateOperationsInput | number
    nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cargoCreateManyInput = {
    pk_cargo?: number
    nombre_cargo?: string | null
  }

  export type cargoUpdateManyMutationInput = {
    nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cargoUncheckedUpdateManyInput = {
    pk_cargo?: IntFieldUpdateOperationsInput | number
    nombre_cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ciaCreateInput = {
    nombre_cia?: string | null
    direccion?: string | null
    telefono?: string | null
  }

  export type ciaUncheckedCreateInput = {
    pk_cia?: number
    nombre_cia?: string | null
    direccion?: string | null
    telefono?: string | null
  }

  export type ciaUpdateInput = {
    nombre_cia?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ciaUncheckedUpdateInput = {
    pk_cia?: IntFieldUpdateOperationsInput | number
    nombre_cia?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ciaCreateManyInput = {
    pk_cia?: number
    nombre_cia?: string | null
    direccion?: string | null
    telefono?: string | null
  }

  export type ciaUpdateManyMutationInput = {
    nombre_cia?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ciaUncheckedUpdateManyInput = {
    pk_cia?: IntFieldUpdateOperationsInput | number
    nombre_cia?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type civilCreateInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    estado?: estadoCreateNestedOneWithoutCivilInput
    datos?: datosCreateNestedManyWithoutCivilInput
  }

  export type civilUncheckedCreateInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    fk_id_estado?: number | null
    datos?: datosUncheckedCreateNestedManyWithoutCivilInput
  }

  export type civilUpdateInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: estadoUpdateOneWithoutCivilNestedInput
    datos?: datosUpdateManyWithoutCivilNestedInput
  }

  export type civilUncheckedUpdateInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    datos?: datosUncheckedUpdateManyWithoutCivilNestedInput
  }

  export type civilCreateManyInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    fk_id_estado?: number | null
  }

  export type civilUpdateManyMutationInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type civilUncheckedUpdateManyInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type datosCreateInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    documento?: documentoCreateNestedOneWithoutDatosInput
    civil?: civilCreateNestedOneWithoutDatosInput
    genero?: generoCreateNestedOneWithoutDatosInput
    pregrado?: pregradoCreateNestedOneWithoutDatosInput
    semestre?: semestreCreateNestedOneWithoutDatosInput
    tipo_status?: tipo_statusCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateOneWithoutDatosNestedInput
    civil?: civilUpdateOneWithoutDatosNestedInput
    genero?: generoUpdateOneWithoutDatosNestedInput
    pregrado?: pregradoUpdateOneWithoutDatosNestedInput
    semestre?: semestreUpdateOneWithoutDatosNestedInput
    tipo_status?: tipo_statusUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosCreateManyInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documentoCreateInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    datos?: datosCreateNestedManyWithoutDocumentoInput
    estado?: estadoCreateNestedOneWithoutDocumentoInput
  }

  export type documentoUncheckedCreateInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    fk_id_estado?: number | null
    datos?: datosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type documentoUpdateInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUpdateManyWithoutDocumentoNestedInput
    estado?: estadoUpdateOneWithoutDocumentoNestedInput
  }

  export type documentoUncheckedUpdateInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    datos?: datosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type documentoCreateManyInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    fk_id_estado?: number | null
  }

  export type documentoUpdateManyMutationInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documentoUncheckedUpdateManyInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type estadoCreateInput = {
    pk_id_estado: number
    nombre?: string | null
    civil?: civilCreateNestedManyWithoutEstadoInput
    documento?: documentoCreateNestedManyWithoutEstadoInput
    genero?: generoCreateNestedManyWithoutEstadoInput
  }

  export type estadoUncheckedCreateInput = {
    pk_id_estado: number
    nombre?: string | null
    civil?: civilUncheckedCreateNestedManyWithoutEstadoInput
    documento?: documentoUncheckedCreateNestedManyWithoutEstadoInput
    genero?: generoUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type estadoUpdateInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUpdateManyWithoutEstadoNestedInput
    documento?: documentoUpdateManyWithoutEstadoNestedInput
    genero?: generoUpdateManyWithoutEstadoNestedInput
  }

  export type estadoUncheckedUpdateInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUncheckedUpdateManyWithoutEstadoNestedInput
    documento?: documentoUncheckedUpdateManyWithoutEstadoNestedInput
    genero?: generoUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type estadoCreateManyInput = {
    pk_id_estado: number
    nombre?: string | null
  }

  export type estadoUpdateManyMutationInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estadoUncheckedUpdateManyInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoCreateInput = {
    pk_id_gene: number
    nom_genero?: string | null
    datos?: datosCreateNestedManyWithoutGeneroInput
    estado?: estadoCreateNestedOneWithoutGeneroInput
  }

  export type generoUncheckedCreateInput = {
    pk_id_gene: number
    nom_genero?: string | null
    fk_id_estado?: number | null
    datos?: datosUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type generoUpdateInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUpdateManyWithoutGeneroNestedInput
    estado?: estadoUpdateOneWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
    datos?: datosUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type generoCreateManyInput = {
    pk_id_gene: number
    nom_genero?: string | null
    fk_id_estado?: number | null
  }

  export type generoUpdateManyMutationInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoUncheckedUpdateManyInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type horariosCreateInput = {
    dia?: string | null
    hora_inicio?: Date | string | null
    hora_fin?: Date | string | null
    mov_asig_au?: mov_asig_auCreateNestedManyWithoutHorariosInput
  }

  export type horariosUncheckedCreateInput = {
    pk_horario?: number
    dia?: string | null
    hora_inicio?: Date | string | null
    hora_fin?: Date | string | null
    mov_asig_au?: mov_asig_auUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type horariosUpdateInput = {
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mov_asig_au?: mov_asig_auUpdateManyWithoutHorariosNestedInput
  }

  export type horariosUncheckedUpdateInput = {
    pk_horario?: IntFieldUpdateOperationsInput | number
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mov_asig_au?: mov_asig_auUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type horariosCreateManyInput = {
    pk_horario?: number
    dia?: string | null
    hora_inicio?: Date | string | null
    hora_fin?: Date | string | null
  }

  export type horariosUpdateManyMutationInput = {
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type horariosUncheckedUpdateManyInput = {
    pk_horario?: IntFieldUpdateOperationsInput | number
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type laboratorioCreateInput = {
    nombre_lab?: string | null
    capacidad?: number | null
  }

  export type laboratorioUncheckedCreateInput = {
    pk_lab?: number
    nombre_lab?: string | null
    capacidad?: number | null
  }

  export type laboratorioUpdateInput = {
    nombre_lab?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type laboratorioUncheckedUpdateInput = {
    pk_lab?: IntFieldUpdateOperationsInput | number
    nombre_lab?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type laboratorioCreateManyInput = {
    pk_lab?: number
    nombre_lab?: string | null
    capacidad?: number | null
  }

  export type laboratorioUpdateManyMutationInput = {
    nombre_lab?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type laboratorioUncheckedUpdateManyInput = {
    pk_lab?: IntFieldUpdateOperationsInput | number
    nombre_lab?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type modulosCreateInput = {
    pk_modulos: number
    nombre?: string | null
    acceso?: accesoCreateNestedManyWithoutModulosInput
  }

  export type modulosUncheckedCreateInput = {
    pk_modulos: number
    nombre?: string | null
    acceso?: accesoUncheckedCreateNestedManyWithoutModulosInput
  }

  export type modulosUpdateInput = {
    pk_modulos?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    acceso?: accesoUpdateManyWithoutModulosNestedInput
  }

  export type modulosUncheckedUpdateInput = {
    pk_modulos?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    acceso?: accesoUncheckedUpdateManyWithoutModulosNestedInput
  }

  export type modulosCreateManyInput = {
    pk_modulos: number
    nombre?: string | null
  }

  export type modulosUpdateManyMutationInput = {
    pk_modulos?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosUncheckedUpdateManyInput = {
    pk_modulos?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mov_asig_auCreateInput = {
    asignaturas?: asignaturasCreateNestedOneWithoutMov_asig_auInput
    aulas?: aulasCreateNestedOneWithoutMov_asig_auInput
    horarios?: horariosCreateNestedOneWithoutMov_asig_auInput
  }

  export type mov_asig_auUncheckedCreateInput = {
    pk_mov?: number
    fk_asignatura?: number | null
    fk_aula?: number | null
    fk_horario?: number | null
  }

  export type mov_asig_auUpdateInput = {
    asignaturas?: asignaturasUpdateOneWithoutMov_asig_auNestedInput
    aulas?: aulasUpdateOneWithoutMov_asig_auNestedInput
    horarios?: horariosUpdateOneWithoutMov_asig_auNestedInput
  }

  export type mov_asig_auUncheckedUpdateInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
    fk_aula?: NullableIntFieldUpdateOperationsInput | number | null
    fk_horario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mov_asig_auCreateManyInput = {
    pk_mov?: number
    fk_asignatura?: number | null
    fk_aula?: number | null
    fk_horario?: number | null
  }

  export type mov_asig_auUpdateManyMutationInput = {

  }

  export type mov_asig_auUncheckedUpdateManyInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
    fk_aula?: NullableIntFieldUpdateOperationsInput | number | null
    fk_horario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pregradoCreateInput = {
    nombre_pregrado?: string | null
    preofe_mate?: preofe_mateCreateNestedManyWithoutPregradoInput
    semestre?: semestreCreateNestedManyWithoutPregradoInput
    datos?: datosCreateNestedManyWithoutPregradoInput
  }

  export type pregradoUncheckedCreateInput = {
    pk_pregrado?: number
    nombre_pregrado?: string | null
    preofe_mate?: preofe_mateUncheckedCreateNestedManyWithoutPregradoInput
    semestre?: semestreUncheckedCreateNestedManyWithoutPregradoInput
    datos?: datosUncheckedCreateNestedManyWithoutPregradoInput
  }

  export type pregradoUpdateInput = {
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUpdateManyWithoutPregradoNestedInput
    semestre?: semestreUpdateManyWithoutPregradoNestedInput
    datos?: datosUpdateManyWithoutPregradoNestedInput
  }

  export type pregradoUncheckedUpdateInput = {
    pk_pregrado?: IntFieldUpdateOperationsInput | number
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUncheckedUpdateManyWithoutPregradoNestedInput
    semestre?: semestreUncheckedUpdateManyWithoutPregradoNestedInput
    datos?: datosUncheckedUpdateManyWithoutPregradoNestedInput
  }

  export type pregradoCreateManyInput = {
    pk_pregrado?: number
    nombre_pregrado?: string | null
  }

  export type pregradoUpdateManyMutationInput = {
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pregradoUncheckedUpdateManyInput = {
    pk_pregrado?: IntFieldUpdateOperationsInput | number
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type preofe_mateCreateInput = {
    pregrado?: pregradoCreateNestedOneWithoutPreofe_mateInput
    asignaturas?: asignaturasCreateNestedOneWithoutPreofe_mateInput
  }

  export type preofe_mateUncheckedCreateInput = {
    pk_preofe?: number
    fk_pregrado?: number | null
    fk_asignatura?: number | null
  }

  export type preofe_mateUpdateInput = {
    pregrado?: pregradoUpdateOneWithoutPreofe_mateNestedInput
    asignaturas?: asignaturasUpdateOneWithoutPreofe_mateNestedInput
  }

  export type preofe_mateUncheckedUpdateInput = {
    pk_preofe?: IntFieldUpdateOperationsInput | number
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type preofe_mateCreateManyInput = {
    pk_preofe?: number
    fk_pregrado?: number | null
    fk_asignatura?: number | null
  }

  export type preofe_mateUpdateManyMutationInput = {

  }

  export type preofe_mateUncheckedUpdateManyInput = {
    pk_preofe?: IntFieldUpdateOperationsInput | number
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type semestreCreateInput = {
    numero?: number | null
    pregrado?: pregradoCreateNestedOneWithoutSemestreInput
    datos?: datosCreateNestedManyWithoutSemestreInput
  }

  export type semestreUncheckedCreateInput = {
    pk_semestre?: number
    numero?: number | null
    fk_pregrado?: number | null
    datos?: datosUncheckedCreateNestedManyWithoutSemestreInput
  }

  export type semestreUpdateInput = {
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    pregrado?: pregradoUpdateOneWithoutSemestreNestedInput
    datos?: datosUpdateManyWithoutSemestreNestedInput
  }

  export type semestreUncheckedUpdateInput = {
    pk_semestre?: IntFieldUpdateOperationsInput | number
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    datos?: datosUncheckedUpdateManyWithoutSemestreNestedInput
  }

  export type semestreCreateManyInput = {
    pk_semestre?: number
    numero?: number | null
    fk_pregrado?: number | null
  }

  export type semestreUpdateManyMutationInput = {
    numero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type semestreUncheckedUpdateManyInput = {
    pk_semestre?: IntFieldUpdateOperationsInput | number
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipo_statusCreateInput = {
    nombre_status?: string | null
    datos?: datosCreateNestedManyWithoutTipo_statusInput
  }

  export type tipo_statusUncheckedCreateInput = {
    pk_status?: number
    nombre_status?: string | null
    datos?: datosUncheckedCreateNestedManyWithoutTipo_statusInput
  }

  export type tipo_statusUpdateInput = {
    nombre_status?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUpdateManyWithoutTipo_statusNestedInput
  }

  export type tipo_statusUncheckedUpdateInput = {
    pk_status?: IntFieldUpdateOperationsInput | number
    nombre_status?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUncheckedUpdateManyWithoutTipo_statusNestedInput
  }

  export type tipo_statusCreateManyInput = {
    pk_status?: number
    nombre_status?: string | null
  }

  export type tipo_statusUpdateManyMutationInput = {
    nombre_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_statusUncheckedUpdateManyInput = {
    pk_status?: IntFieldUpdateOperationsInput | number
    nombre_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ModulosNullableScalarRelationFilter = {
    is?: modulosWhereInput | null
    isNot?: modulosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accesoOrderByRelevanceInput = {
    fields: accesoOrderByRelevanceFieldEnum | accesoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type accesoCountOrderByAggregateInput = {
    pk_acceso?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    fk_modulo?: SortOrder
  }

  export type accesoAvgOrderByAggregateInput = {
    pk_acceso?: SortOrder
    fk_modulo?: SortOrder
  }

  export type accesoMaxOrderByAggregateInput = {
    pk_acceso?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    fk_modulo?: SortOrder
  }

  export type accesoMinOrderByAggregateInput = {
    pk_acceso?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    fk_modulo?: SortOrder
  }

  export type accesoSumOrderByAggregateInput = {
    pk_acceso?: SortOrder
    fk_modulo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Mov_asig_auListRelationFilter = {
    every?: mov_asig_auWhereInput
    some?: mov_asig_auWhereInput
    none?: mov_asig_auWhereInput
  }

  export type Preofe_mateListRelationFilter = {
    every?: preofe_mateWhereInput
    some?: preofe_mateWhereInput
    none?: preofe_mateWhereInput
  }

  export type mov_asig_auOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type preofe_mateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type asignaturasOrderByRelevanceInput = {
    fields: asignaturasOrderByRelevanceFieldEnum | asignaturasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type asignaturasCountOrderByAggregateInput = {
    pk_asignatura?: SortOrder
    nombre_asignatura?: SortOrder
    codigo?: SortOrder
  }

  export type asignaturasAvgOrderByAggregateInput = {
    pk_asignatura?: SortOrder
  }

  export type asignaturasMaxOrderByAggregateInput = {
    pk_asignatura?: SortOrder
    nombre_asignatura?: SortOrder
    codigo?: SortOrder
  }

  export type asignaturasMinOrderByAggregateInput = {
    pk_asignatura?: SortOrder
    nombre_asignatura?: SortOrder
    codigo?: SortOrder
  }

  export type asignaturasSumOrderByAggregateInput = {
    pk_asignatura?: SortOrder
  }

  export type aulasOrderByRelevanceInput = {
    fields: aulasOrderByRelevanceFieldEnum | aulasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type aulasCountOrderByAggregateInput = {
    pk_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
  }

  export type aulasAvgOrderByAggregateInput = {
    pk_aula?: SortOrder
    capacidad?: SortOrder
  }

  export type aulasMaxOrderByAggregateInput = {
    pk_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
  }

  export type aulasMinOrderByAggregateInput = {
    pk_aula?: SortOrder
    nombre_aula?: SortOrder
    capacidad?: SortOrder
  }

  export type aulasSumOrderByAggregateInput = {
    pk_aula?: SortOrder
    capacidad?: SortOrder
  }

  export type cargoOrderByRelevanceInput = {
    fields: cargoOrderByRelevanceFieldEnum | cargoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cargoCountOrderByAggregateInput = {
    pk_cargo?: SortOrder
    nombre_cargo?: SortOrder
  }

  export type cargoAvgOrderByAggregateInput = {
    pk_cargo?: SortOrder
  }

  export type cargoMaxOrderByAggregateInput = {
    pk_cargo?: SortOrder
    nombre_cargo?: SortOrder
  }

  export type cargoMinOrderByAggregateInput = {
    pk_cargo?: SortOrder
    nombre_cargo?: SortOrder
  }

  export type cargoSumOrderByAggregateInput = {
    pk_cargo?: SortOrder
  }

  export type ciaOrderByRelevanceInput = {
    fields: ciaOrderByRelevanceFieldEnum | ciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ciaCountOrderByAggregateInput = {
    pk_cia?: SortOrder
    nombre_cia?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type ciaAvgOrderByAggregateInput = {
    pk_cia?: SortOrder
  }

  export type ciaMaxOrderByAggregateInput = {
    pk_cia?: SortOrder
    nombre_cia?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type ciaMinOrderByAggregateInput = {
    pk_cia?: SortOrder
    nombre_cia?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type ciaSumOrderByAggregateInput = {
    pk_cia?: SortOrder
  }

  export type EstadoNullableScalarRelationFilter = {
    is?: estadoWhereInput | null
    isNot?: estadoWhereInput | null
  }

  export type DatosListRelationFilter = {
    every?: datosWhereInput
    some?: datosWhereInput
    none?: datosWhereInput
  }

  export type datosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type civilOrderByRelevanceInput = {
    fields: civilOrderByRelevanceFieldEnum | civilOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type civilCountOrderByAggregateInput = {
    pk_id_civil?: SortOrder
    nombre_civil?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type civilAvgOrderByAggregateInput = {
    pk_id_civil?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type civilMaxOrderByAggregateInput = {
    pk_id_civil?: SortOrder
    nombre_civil?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type civilMinOrderByAggregateInput = {
    pk_id_civil?: SortOrder
    nombre_civil?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type civilSumOrderByAggregateInput = {
    pk_id_civil?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type DocumentoNullableScalarRelationFilter = {
    is?: documentoWhereInput | null
    isNot?: documentoWhereInput | null
  }

  export type CivilNullableScalarRelationFilter = {
    is?: civilWhereInput | null
    isNot?: civilWhereInput | null
  }

  export type GeneroNullableScalarRelationFilter = {
    is?: generoWhereInput | null
    isNot?: generoWhereInput | null
  }

  export type PregradoNullableScalarRelationFilter = {
    is?: pregradoWhereInput | null
    isNot?: pregradoWhereInput | null
  }

  export type SemestreNullableScalarRelationFilter = {
    is?: semestreWhereInput | null
    isNot?: semestreWhereInput | null
  }

  export type Tipo_statusNullableScalarRelationFilter = {
    is?: tipo_statusWhereInput | null
    isNot?: tipo_statusWhereInput | null
  }

  export type datosOrderByRelevanceInput = {
    fields: datosOrderByRelevanceFieldEnum | datosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type datosCountOrderByAggregateInput = {
    pk_dato?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fk_id_doc?: SortOrder
    fk_id_civil?: SortOrder
    fk_id_gene?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    fk_pregrado?: SortOrder
    fk_id_semestre?: SortOrder
    fk_id_tipo_status?: SortOrder
    asignatura?: SortOrder
    salon?: SortOrder
    dia?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type datosAvgOrderByAggregateInput = {
    pk_dato?: SortOrder
    fk_id_doc?: SortOrder
    fk_id_civil?: SortOrder
    fk_id_gene?: SortOrder
    fk_pregrado?: SortOrder
    fk_id_semestre?: SortOrder
    fk_id_tipo_status?: SortOrder
  }

  export type datosMaxOrderByAggregateInput = {
    pk_dato?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fk_id_doc?: SortOrder
    fk_id_civil?: SortOrder
    fk_id_gene?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    fk_pregrado?: SortOrder
    fk_id_semestre?: SortOrder
    fk_id_tipo_status?: SortOrder
    asignatura?: SortOrder
    salon?: SortOrder
    dia?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type datosMinOrderByAggregateInput = {
    pk_dato?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    fk_id_doc?: SortOrder
    fk_id_civil?: SortOrder
    fk_id_gene?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    fk_pregrado?: SortOrder
    fk_id_semestre?: SortOrder
    fk_id_tipo_status?: SortOrder
    asignatura?: SortOrder
    salon?: SortOrder
    dia?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type datosSumOrderByAggregateInput = {
    pk_dato?: SortOrder
    fk_id_doc?: SortOrder
    fk_id_civil?: SortOrder
    fk_id_gene?: SortOrder
    fk_pregrado?: SortOrder
    fk_id_semestre?: SortOrder
    fk_id_tipo_status?: SortOrder
  }

  export type documentoOrderByRelevanceInput = {
    fields: documentoOrderByRelevanceFieldEnum | documentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type documentoCountOrderByAggregateInput = {
    pk_id_doc?: SortOrder
    nombre_documento?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type documentoAvgOrderByAggregateInput = {
    pk_id_doc?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type documentoMaxOrderByAggregateInput = {
    pk_id_doc?: SortOrder
    nombre_documento?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type documentoMinOrderByAggregateInput = {
    pk_id_doc?: SortOrder
    nombre_documento?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type documentoSumOrderByAggregateInput = {
    pk_id_doc?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type CivilListRelationFilter = {
    every?: civilWhereInput
    some?: civilWhereInput
    none?: civilWhereInput
  }

  export type DocumentoListRelationFilter = {
    every?: documentoWhereInput
    some?: documentoWhereInput
    none?: documentoWhereInput
  }

  export type GeneroListRelationFilter = {
    every?: generoWhereInput
    some?: generoWhereInput
    none?: generoWhereInput
  }

  export type civilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type generoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estadoOrderByRelevanceInput = {
    fields: estadoOrderByRelevanceFieldEnum | estadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type estadoCountOrderByAggregateInput = {
    pk_id_estado?: SortOrder
    nombre?: SortOrder
  }

  export type estadoAvgOrderByAggregateInput = {
    pk_id_estado?: SortOrder
  }

  export type estadoMaxOrderByAggregateInput = {
    pk_id_estado?: SortOrder
    nombre?: SortOrder
  }

  export type estadoMinOrderByAggregateInput = {
    pk_id_estado?: SortOrder
    nombre?: SortOrder
  }

  export type estadoSumOrderByAggregateInput = {
    pk_id_estado?: SortOrder
  }

  export type generoOrderByRelevanceInput = {
    fields: generoOrderByRelevanceFieldEnum | generoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type generoCountOrderByAggregateInput = {
    pk_id_gene?: SortOrder
    nom_genero?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type generoAvgOrderByAggregateInput = {
    pk_id_gene?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type generoMaxOrderByAggregateInput = {
    pk_id_gene?: SortOrder
    nom_genero?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type generoMinOrderByAggregateInput = {
    pk_id_gene?: SortOrder
    nom_genero?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type generoSumOrderByAggregateInput = {
    pk_id_gene?: SortOrder
    fk_id_estado?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type horariosOrderByRelevanceInput = {
    fields: horariosOrderByRelevanceFieldEnum | horariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type horariosCountOrderByAggregateInput = {
    pk_horario?: SortOrder
    dia?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type horariosAvgOrderByAggregateInput = {
    pk_horario?: SortOrder
  }

  export type horariosMaxOrderByAggregateInput = {
    pk_horario?: SortOrder
    dia?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type horariosMinOrderByAggregateInput = {
    pk_horario?: SortOrder
    dia?: SortOrder
    hora_inicio?: SortOrder
    hora_fin?: SortOrder
  }

  export type horariosSumOrderByAggregateInput = {
    pk_horario?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type laboratorioOrderByRelevanceInput = {
    fields: laboratorioOrderByRelevanceFieldEnum | laboratorioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type laboratorioCountOrderByAggregateInput = {
    pk_lab?: SortOrder
    nombre_lab?: SortOrder
    capacidad?: SortOrder
  }

  export type laboratorioAvgOrderByAggregateInput = {
    pk_lab?: SortOrder
    capacidad?: SortOrder
  }

  export type laboratorioMaxOrderByAggregateInput = {
    pk_lab?: SortOrder
    nombre_lab?: SortOrder
    capacidad?: SortOrder
  }

  export type laboratorioMinOrderByAggregateInput = {
    pk_lab?: SortOrder
    nombre_lab?: SortOrder
    capacidad?: SortOrder
  }

  export type laboratorioSumOrderByAggregateInput = {
    pk_lab?: SortOrder
    capacidad?: SortOrder
  }

  export type AccesoListRelationFilter = {
    every?: accesoWhereInput
    some?: accesoWhereInput
    none?: accesoWhereInput
  }

  export type accesoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type modulosOrderByRelevanceInput = {
    fields: modulosOrderByRelevanceFieldEnum | modulosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type modulosCountOrderByAggregateInput = {
    pk_modulos?: SortOrder
    nombre?: SortOrder
  }

  export type modulosAvgOrderByAggregateInput = {
    pk_modulos?: SortOrder
  }

  export type modulosMaxOrderByAggregateInput = {
    pk_modulos?: SortOrder
    nombre?: SortOrder
  }

  export type modulosMinOrderByAggregateInput = {
    pk_modulos?: SortOrder
    nombre?: SortOrder
  }

  export type modulosSumOrderByAggregateInput = {
    pk_modulos?: SortOrder
  }

  export type AsignaturasNullableScalarRelationFilter = {
    is?: asignaturasWhereInput | null
    isNot?: asignaturasWhereInput | null
  }

  export type AulasNullableScalarRelationFilter = {
    is?: aulasWhereInput | null
    isNot?: aulasWhereInput | null
  }

  export type HorariosNullableScalarRelationFilter = {
    is?: horariosWhereInput | null
    isNot?: horariosWhereInput | null
  }

  export type mov_asig_auCountOrderByAggregateInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrder
    fk_aula?: SortOrder
    fk_horario?: SortOrder
  }

  export type mov_asig_auAvgOrderByAggregateInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrder
    fk_aula?: SortOrder
    fk_horario?: SortOrder
  }

  export type mov_asig_auMaxOrderByAggregateInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrder
    fk_aula?: SortOrder
    fk_horario?: SortOrder
  }

  export type mov_asig_auMinOrderByAggregateInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrder
    fk_aula?: SortOrder
    fk_horario?: SortOrder
  }

  export type mov_asig_auSumOrderByAggregateInput = {
    pk_mov?: SortOrder
    fk_asignatura?: SortOrder
    fk_aula?: SortOrder
    fk_horario?: SortOrder
  }

  export type SemestreListRelationFilter = {
    every?: semestreWhereInput
    some?: semestreWhereInput
    none?: semestreWhereInput
  }

  export type semestreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pregradoOrderByRelevanceInput = {
    fields: pregradoOrderByRelevanceFieldEnum | pregradoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pregradoCountOrderByAggregateInput = {
    pk_pregrado?: SortOrder
    nombre_pregrado?: SortOrder
  }

  export type pregradoAvgOrderByAggregateInput = {
    pk_pregrado?: SortOrder
  }

  export type pregradoMaxOrderByAggregateInput = {
    pk_pregrado?: SortOrder
    nombre_pregrado?: SortOrder
  }

  export type pregradoMinOrderByAggregateInput = {
    pk_pregrado?: SortOrder
    nombre_pregrado?: SortOrder
  }

  export type pregradoSumOrderByAggregateInput = {
    pk_pregrado?: SortOrder
  }

  export type preofe_mateCountOrderByAggregateInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrder
    fk_asignatura?: SortOrder
  }

  export type preofe_mateAvgOrderByAggregateInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrder
    fk_asignatura?: SortOrder
  }

  export type preofe_mateMaxOrderByAggregateInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrder
    fk_asignatura?: SortOrder
  }

  export type preofe_mateMinOrderByAggregateInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrder
    fk_asignatura?: SortOrder
  }

  export type preofe_mateSumOrderByAggregateInput = {
    pk_preofe?: SortOrder
    fk_pregrado?: SortOrder
    fk_asignatura?: SortOrder
  }

  export type semestreCountOrderByAggregateInput = {
    pk_semestre?: SortOrder
    numero?: SortOrder
    fk_pregrado?: SortOrder
  }

  export type semestreAvgOrderByAggregateInput = {
    pk_semestre?: SortOrder
    numero?: SortOrder
    fk_pregrado?: SortOrder
  }

  export type semestreMaxOrderByAggregateInput = {
    pk_semestre?: SortOrder
    numero?: SortOrder
    fk_pregrado?: SortOrder
  }

  export type semestreMinOrderByAggregateInput = {
    pk_semestre?: SortOrder
    numero?: SortOrder
    fk_pregrado?: SortOrder
  }

  export type semestreSumOrderByAggregateInput = {
    pk_semestre?: SortOrder
    numero?: SortOrder
    fk_pregrado?: SortOrder
  }

  export type tipo_statusOrderByRelevanceInput = {
    fields: tipo_statusOrderByRelevanceFieldEnum | tipo_statusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tipo_statusCountOrderByAggregateInput = {
    pk_status?: SortOrder
    nombre_status?: SortOrder
  }

  export type tipo_statusAvgOrderByAggregateInput = {
    pk_status?: SortOrder
  }

  export type tipo_statusMaxOrderByAggregateInput = {
    pk_status?: SortOrder
    nombre_status?: SortOrder
  }

  export type tipo_statusMinOrderByAggregateInput = {
    pk_status?: SortOrder
    nombre_status?: SortOrder
  }

  export type tipo_statusSumOrderByAggregateInput = {
    pk_status?: SortOrder
  }

  export type modulosCreateNestedOneWithoutAccesoInput = {
    create?: XOR<modulosCreateWithoutAccesoInput, modulosUncheckedCreateWithoutAccesoInput>
    connectOrCreate?: modulosCreateOrConnectWithoutAccesoInput
    connect?: modulosWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type modulosUpdateOneWithoutAccesoNestedInput = {
    create?: XOR<modulosCreateWithoutAccesoInput, modulosUncheckedCreateWithoutAccesoInput>
    connectOrCreate?: modulosCreateOrConnectWithoutAccesoInput
    upsert?: modulosUpsertWithoutAccesoInput
    disconnect?: modulosWhereInput | boolean
    delete?: modulosWhereInput | boolean
    connect?: modulosWhereUniqueInput
    update?: XOR<XOR<modulosUpdateToOneWithWhereWithoutAccesoInput, modulosUpdateWithoutAccesoInput>, modulosUncheckedUpdateWithoutAccesoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mov_asig_auCreateNestedManyWithoutAsignaturasInput = {
    create?: XOR<mov_asig_auCreateWithoutAsignaturasInput, mov_asig_auUncheckedCreateWithoutAsignaturasInput> | mov_asig_auCreateWithoutAsignaturasInput[] | mov_asig_auUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAsignaturasInput | mov_asig_auCreateOrConnectWithoutAsignaturasInput[]
    createMany?: mov_asig_auCreateManyAsignaturasInputEnvelope
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
  }

  export type preofe_mateCreateNestedManyWithoutAsignaturasInput = {
    create?: XOR<preofe_mateCreateWithoutAsignaturasInput, preofe_mateUncheckedCreateWithoutAsignaturasInput> | preofe_mateCreateWithoutAsignaturasInput[] | preofe_mateUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutAsignaturasInput | preofe_mateCreateOrConnectWithoutAsignaturasInput[]
    createMany?: preofe_mateCreateManyAsignaturasInputEnvelope
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
  }

  export type mov_asig_auUncheckedCreateNestedManyWithoutAsignaturasInput = {
    create?: XOR<mov_asig_auCreateWithoutAsignaturasInput, mov_asig_auUncheckedCreateWithoutAsignaturasInput> | mov_asig_auCreateWithoutAsignaturasInput[] | mov_asig_auUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAsignaturasInput | mov_asig_auCreateOrConnectWithoutAsignaturasInput[]
    createMany?: mov_asig_auCreateManyAsignaturasInputEnvelope
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
  }

  export type preofe_mateUncheckedCreateNestedManyWithoutAsignaturasInput = {
    create?: XOR<preofe_mateCreateWithoutAsignaturasInput, preofe_mateUncheckedCreateWithoutAsignaturasInput> | preofe_mateCreateWithoutAsignaturasInput[] | preofe_mateUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutAsignaturasInput | preofe_mateCreateOrConnectWithoutAsignaturasInput[]
    createMany?: preofe_mateCreateManyAsignaturasInputEnvelope
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
  }

  export type mov_asig_auUpdateManyWithoutAsignaturasNestedInput = {
    create?: XOR<mov_asig_auCreateWithoutAsignaturasInput, mov_asig_auUncheckedCreateWithoutAsignaturasInput> | mov_asig_auCreateWithoutAsignaturasInput[] | mov_asig_auUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAsignaturasInput | mov_asig_auCreateOrConnectWithoutAsignaturasInput[]
    upsert?: mov_asig_auUpsertWithWhereUniqueWithoutAsignaturasInput | mov_asig_auUpsertWithWhereUniqueWithoutAsignaturasInput[]
    createMany?: mov_asig_auCreateManyAsignaturasInputEnvelope
    set?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    disconnect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    delete?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    update?: mov_asig_auUpdateWithWhereUniqueWithoutAsignaturasInput | mov_asig_auUpdateWithWhereUniqueWithoutAsignaturasInput[]
    updateMany?: mov_asig_auUpdateManyWithWhereWithoutAsignaturasInput | mov_asig_auUpdateManyWithWhereWithoutAsignaturasInput[]
    deleteMany?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
  }

  export type preofe_mateUpdateManyWithoutAsignaturasNestedInput = {
    create?: XOR<preofe_mateCreateWithoutAsignaturasInput, preofe_mateUncheckedCreateWithoutAsignaturasInput> | preofe_mateCreateWithoutAsignaturasInput[] | preofe_mateUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutAsignaturasInput | preofe_mateCreateOrConnectWithoutAsignaturasInput[]
    upsert?: preofe_mateUpsertWithWhereUniqueWithoutAsignaturasInput | preofe_mateUpsertWithWhereUniqueWithoutAsignaturasInput[]
    createMany?: preofe_mateCreateManyAsignaturasInputEnvelope
    set?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    disconnect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    delete?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    update?: preofe_mateUpdateWithWhereUniqueWithoutAsignaturasInput | preofe_mateUpdateWithWhereUniqueWithoutAsignaturasInput[]
    updateMany?: preofe_mateUpdateManyWithWhereWithoutAsignaturasInput | preofe_mateUpdateManyWithWhereWithoutAsignaturasInput[]
    deleteMany?: preofe_mateScalarWhereInput | preofe_mateScalarWhereInput[]
  }

  export type mov_asig_auUncheckedUpdateManyWithoutAsignaturasNestedInput = {
    create?: XOR<mov_asig_auCreateWithoutAsignaturasInput, mov_asig_auUncheckedCreateWithoutAsignaturasInput> | mov_asig_auCreateWithoutAsignaturasInput[] | mov_asig_auUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAsignaturasInput | mov_asig_auCreateOrConnectWithoutAsignaturasInput[]
    upsert?: mov_asig_auUpsertWithWhereUniqueWithoutAsignaturasInput | mov_asig_auUpsertWithWhereUniqueWithoutAsignaturasInput[]
    createMany?: mov_asig_auCreateManyAsignaturasInputEnvelope
    set?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    disconnect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    delete?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    update?: mov_asig_auUpdateWithWhereUniqueWithoutAsignaturasInput | mov_asig_auUpdateWithWhereUniqueWithoutAsignaturasInput[]
    updateMany?: mov_asig_auUpdateManyWithWhereWithoutAsignaturasInput | mov_asig_auUpdateManyWithWhereWithoutAsignaturasInput[]
    deleteMany?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
  }

  export type preofe_mateUncheckedUpdateManyWithoutAsignaturasNestedInput = {
    create?: XOR<preofe_mateCreateWithoutAsignaturasInput, preofe_mateUncheckedCreateWithoutAsignaturasInput> | preofe_mateCreateWithoutAsignaturasInput[] | preofe_mateUncheckedCreateWithoutAsignaturasInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutAsignaturasInput | preofe_mateCreateOrConnectWithoutAsignaturasInput[]
    upsert?: preofe_mateUpsertWithWhereUniqueWithoutAsignaturasInput | preofe_mateUpsertWithWhereUniqueWithoutAsignaturasInput[]
    createMany?: preofe_mateCreateManyAsignaturasInputEnvelope
    set?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    disconnect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    delete?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    update?: preofe_mateUpdateWithWhereUniqueWithoutAsignaturasInput | preofe_mateUpdateWithWhereUniqueWithoutAsignaturasInput[]
    updateMany?: preofe_mateUpdateManyWithWhereWithoutAsignaturasInput | preofe_mateUpdateManyWithWhereWithoutAsignaturasInput[]
    deleteMany?: preofe_mateScalarWhereInput | preofe_mateScalarWhereInput[]
  }

  export type mov_asig_auCreateNestedManyWithoutAulasInput = {
    create?: XOR<mov_asig_auCreateWithoutAulasInput, mov_asig_auUncheckedCreateWithoutAulasInput> | mov_asig_auCreateWithoutAulasInput[] | mov_asig_auUncheckedCreateWithoutAulasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAulasInput | mov_asig_auCreateOrConnectWithoutAulasInput[]
    createMany?: mov_asig_auCreateManyAulasInputEnvelope
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
  }

  export type mov_asig_auUncheckedCreateNestedManyWithoutAulasInput = {
    create?: XOR<mov_asig_auCreateWithoutAulasInput, mov_asig_auUncheckedCreateWithoutAulasInput> | mov_asig_auCreateWithoutAulasInput[] | mov_asig_auUncheckedCreateWithoutAulasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAulasInput | mov_asig_auCreateOrConnectWithoutAulasInput[]
    createMany?: mov_asig_auCreateManyAulasInputEnvelope
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
  }

  export type mov_asig_auUpdateManyWithoutAulasNestedInput = {
    create?: XOR<mov_asig_auCreateWithoutAulasInput, mov_asig_auUncheckedCreateWithoutAulasInput> | mov_asig_auCreateWithoutAulasInput[] | mov_asig_auUncheckedCreateWithoutAulasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAulasInput | mov_asig_auCreateOrConnectWithoutAulasInput[]
    upsert?: mov_asig_auUpsertWithWhereUniqueWithoutAulasInput | mov_asig_auUpsertWithWhereUniqueWithoutAulasInput[]
    createMany?: mov_asig_auCreateManyAulasInputEnvelope
    set?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    disconnect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    delete?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    update?: mov_asig_auUpdateWithWhereUniqueWithoutAulasInput | mov_asig_auUpdateWithWhereUniqueWithoutAulasInput[]
    updateMany?: mov_asig_auUpdateManyWithWhereWithoutAulasInput | mov_asig_auUpdateManyWithWhereWithoutAulasInput[]
    deleteMany?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
  }

  export type mov_asig_auUncheckedUpdateManyWithoutAulasNestedInput = {
    create?: XOR<mov_asig_auCreateWithoutAulasInput, mov_asig_auUncheckedCreateWithoutAulasInput> | mov_asig_auCreateWithoutAulasInput[] | mov_asig_auUncheckedCreateWithoutAulasInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutAulasInput | mov_asig_auCreateOrConnectWithoutAulasInput[]
    upsert?: mov_asig_auUpsertWithWhereUniqueWithoutAulasInput | mov_asig_auUpsertWithWhereUniqueWithoutAulasInput[]
    createMany?: mov_asig_auCreateManyAulasInputEnvelope
    set?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    disconnect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    delete?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    update?: mov_asig_auUpdateWithWhereUniqueWithoutAulasInput | mov_asig_auUpdateWithWhereUniqueWithoutAulasInput[]
    updateMany?: mov_asig_auUpdateManyWithWhereWithoutAulasInput | mov_asig_auUpdateManyWithWhereWithoutAulasInput[]
    deleteMany?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
  }

  export type estadoCreateNestedOneWithoutCivilInput = {
    create?: XOR<estadoCreateWithoutCivilInput, estadoUncheckedCreateWithoutCivilInput>
    connectOrCreate?: estadoCreateOrConnectWithoutCivilInput
    connect?: estadoWhereUniqueInput
  }

  export type datosCreateNestedManyWithoutCivilInput = {
    create?: XOR<datosCreateWithoutCivilInput, datosUncheckedCreateWithoutCivilInput> | datosCreateWithoutCivilInput[] | datosUncheckedCreateWithoutCivilInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCivilInput | datosCreateOrConnectWithoutCivilInput[]
    createMany?: datosCreateManyCivilInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutCivilInput = {
    create?: XOR<datosCreateWithoutCivilInput, datosUncheckedCreateWithoutCivilInput> | datosCreateWithoutCivilInput[] | datosUncheckedCreateWithoutCivilInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCivilInput | datosCreateOrConnectWithoutCivilInput[]
    createMany?: datosCreateManyCivilInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type estadoUpdateOneWithoutCivilNestedInput = {
    create?: XOR<estadoCreateWithoutCivilInput, estadoUncheckedCreateWithoutCivilInput>
    connectOrCreate?: estadoCreateOrConnectWithoutCivilInput
    upsert?: estadoUpsertWithoutCivilInput
    disconnect?: estadoWhereInput | boolean
    delete?: estadoWhereInput | boolean
    connect?: estadoWhereUniqueInput
    update?: XOR<XOR<estadoUpdateToOneWithWhereWithoutCivilInput, estadoUpdateWithoutCivilInput>, estadoUncheckedUpdateWithoutCivilInput>
  }

  export type datosUpdateManyWithoutCivilNestedInput = {
    create?: XOR<datosCreateWithoutCivilInput, datosUncheckedCreateWithoutCivilInput> | datosCreateWithoutCivilInput[] | datosUncheckedCreateWithoutCivilInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCivilInput | datosCreateOrConnectWithoutCivilInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutCivilInput | datosUpsertWithWhereUniqueWithoutCivilInput[]
    createMany?: datosCreateManyCivilInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutCivilInput | datosUpdateWithWhereUniqueWithoutCivilInput[]
    updateMany?: datosUpdateManyWithWhereWithoutCivilInput | datosUpdateManyWithWhereWithoutCivilInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutCivilNestedInput = {
    create?: XOR<datosCreateWithoutCivilInput, datosUncheckedCreateWithoutCivilInput> | datosCreateWithoutCivilInput[] | datosUncheckedCreateWithoutCivilInput[]
    connectOrCreate?: datosCreateOrConnectWithoutCivilInput | datosCreateOrConnectWithoutCivilInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutCivilInput | datosUpsertWithWhereUniqueWithoutCivilInput[]
    createMany?: datosCreateManyCivilInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutCivilInput | datosUpdateWithWhereUniqueWithoutCivilInput[]
    updateMany?: datosUpdateManyWithWhereWithoutCivilInput | datosUpdateManyWithWhereWithoutCivilInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type documentoCreateNestedOneWithoutDatosInput = {
    create?: XOR<documentoCreateWithoutDatosInput, documentoUncheckedCreateWithoutDatosInput>
    connectOrCreate?: documentoCreateOrConnectWithoutDatosInput
    connect?: documentoWhereUniqueInput
  }

  export type civilCreateNestedOneWithoutDatosInput = {
    create?: XOR<civilCreateWithoutDatosInput, civilUncheckedCreateWithoutDatosInput>
    connectOrCreate?: civilCreateOrConnectWithoutDatosInput
    connect?: civilWhereUniqueInput
  }

  export type generoCreateNestedOneWithoutDatosInput = {
    create?: XOR<generoCreateWithoutDatosInput, generoUncheckedCreateWithoutDatosInput>
    connectOrCreate?: generoCreateOrConnectWithoutDatosInput
    connect?: generoWhereUniqueInput
  }

  export type pregradoCreateNestedOneWithoutDatosInput = {
    create?: XOR<pregradoCreateWithoutDatosInput, pregradoUncheckedCreateWithoutDatosInput>
    connectOrCreate?: pregradoCreateOrConnectWithoutDatosInput
    connect?: pregradoWhereUniqueInput
  }

  export type semestreCreateNestedOneWithoutDatosInput = {
    create?: XOR<semestreCreateWithoutDatosInput, semestreUncheckedCreateWithoutDatosInput>
    connectOrCreate?: semestreCreateOrConnectWithoutDatosInput
    connect?: semestreWhereUniqueInput
  }

  export type tipo_statusCreateNestedOneWithoutDatosInput = {
    create?: XOR<tipo_statusCreateWithoutDatosInput, tipo_statusUncheckedCreateWithoutDatosInput>
    connectOrCreate?: tipo_statusCreateOrConnectWithoutDatosInput
    connect?: tipo_statusWhereUniqueInput
  }

  export type documentoUpdateOneWithoutDatosNestedInput = {
    create?: XOR<documentoCreateWithoutDatosInput, documentoUncheckedCreateWithoutDatosInput>
    connectOrCreate?: documentoCreateOrConnectWithoutDatosInput
    upsert?: documentoUpsertWithoutDatosInput
    disconnect?: documentoWhereInput | boolean
    delete?: documentoWhereInput | boolean
    connect?: documentoWhereUniqueInput
    update?: XOR<XOR<documentoUpdateToOneWithWhereWithoutDatosInput, documentoUpdateWithoutDatosInput>, documentoUncheckedUpdateWithoutDatosInput>
  }

  export type civilUpdateOneWithoutDatosNestedInput = {
    create?: XOR<civilCreateWithoutDatosInput, civilUncheckedCreateWithoutDatosInput>
    connectOrCreate?: civilCreateOrConnectWithoutDatosInput
    upsert?: civilUpsertWithoutDatosInput
    disconnect?: civilWhereInput | boolean
    delete?: civilWhereInput | boolean
    connect?: civilWhereUniqueInput
    update?: XOR<XOR<civilUpdateToOneWithWhereWithoutDatosInput, civilUpdateWithoutDatosInput>, civilUncheckedUpdateWithoutDatosInput>
  }

  export type generoUpdateOneWithoutDatosNestedInput = {
    create?: XOR<generoCreateWithoutDatosInput, generoUncheckedCreateWithoutDatosInput>
    connectOrCreate?: generoCreateOrConnectWithoutDatosInput
    upsert?: generoUpsertWithoutDatosInput
    disconnect?: generoWhereInput | boolean
    delete?: generoWhereInput | boolean
    connect?: generoWhereUniqueInput
    update?: XOR<XOR<generoUpdateToOneWithWhereWithoutDatosInput, generoUpdateWithoutDatosInput>, generoUncheckedUpdateWithoutDatosInput>
  }

  export type pregradoUpdateOneWithoutDatosNestedInput = {
    create?: XOR<pregradoCreateWithoutDatosInput, pregradoUncheckedCreateWithoutDatosInput>
    connectOrCreate?: pregradoCreateOrConnectWithoutDatosInput
    upsert?: pregradoUpsertWithoutDatosInput
    disconnect?: pregradoWhereInput | boolean
    delete?: pregradoWhereInput | boolean
    connect?: pregradoWhereUniqueInput
    update?: XOR<XOR<pregradoUpdateToOneWithWhereWithoutDatosInput, pregradoUpdateWithoutDatosInput>, pregradoUncheckedUpdateWithoutDatosInput>
  }

  export type semestreUpdateOneWithoutDatosNestedInput = {
    create?: XOR<semestreCreateWithoutDatosInput, semestreUncheckedCreateWithoutDatosInput>
    connectOrCreate?: semestreCreateOrConnectWithoutDatosInput
    upsert?: semestreUpsertWithoutDatosInput
    disconnect?: semestreWhereInput | boolean
    delete?: semestreWhereInput | boolean
    connect?: semestreWhereUniqueInput
    update?: XOR<XOR<semestreUpdateToOneWithWhereWithoutDatosInput, semestreUpdateWithoutDatosInput>, semestreUncheckedUpdateWithoutDatosInput>
  }

  export type tipo_statusUpdateOneWithoutDatosNestedInput = {
    create?: XOR<tipo_statusCreateWithoutDatosInput, tipo_statusUncheckedCreateWithoutDatosInput>
    connectOrCreate?: tipo_statusCreateOrConnectWithoutDatosInput
    upsert?: tipo_statusUpsertWithoutDatosInput
    disconnect?: tipo_statusWhereInput | boolean
    delete?: tipo_statusWhereInput | boolean
    connect?: tipo_statusWhereUniqueInput
    update?: XOR<XOR<tipo_statusUpdateToOneWithWhereWithoutDatosInput, tipo_statusUpdateWithoutDatosInput>, tipo_statusUncheckedUpdateWithoutDatosInput>
  }

  export type datosCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<datosCreateWithoutDocumentoInput, datosUncheckedCreateWithoutDocumentoInput> | datosCreateWithoutDocumentoInput[] | datosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutDocumentoInput | datosCreateOrConnectWithoutDocumentoInput[]
    createMany?: datosCreateManyDocumentoInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type estadoCreateNestedOneWithoutDocumentoInput = {
    create?: XOR<estadoCreateWithoutDocumentoInput, estadoUncheckedCreateWithoutDocumentoInput>
    connectOrCreate?: estadoCreateOrConnectWithoutDocumentoInput
    connect?: estadoWhereUniqueInput
  }

  export type datosUncheckedCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<datosCreateWithoutDocumentoInput, datosUncheckedCreateWithoutDocumentoInput> | datosCreateWithoutDocumentoInput[] | datosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutDocumentoInput | datosCreateOrConnectWithoutDocumentoInput[]
    createMany?: datosCreateManyDocumentoInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<datosCreateWithoutDocumentoInput, datosUncheckedCreateWithoutDocumentoInput> | datosCreateWithoutDocumentoInput[] | datosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutDocumentoInput | datosCreateOrConnectWithoutDocumentoInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutDocumentoInput | datosUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: datosCreateManyDocumentoInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutDocumentoInput | datosUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: datosUpdateManyWithWhereWithoutDocumentoInput | datosUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type estadoUpdateOneWithoutDocumentoNestedInput = {
    create?: XOR<estadoCreateWithoutDocumentoInput, estadoUncheckedCreateWithoutDocumentoInput>
    connectOrCreate?: estadoCreateOrConnectWithoutDocumentoInput
    upsert?: estadoUpsertWithoutDocumentoInput
    disconnect?: estadoWhereInput | boolean
    delete?: estadoWhereInput | boolean
    connect?: estadoWhereUniqueInput
    update?: XOR<XOR<estadoUpdateToOneWithWhereWithoutDocumentoInput, estadoUpdateWithoutDocumentoInput>, estadoUncheckedUpdateWithoutDocumentoInput>
  }

  export type datosUncheckedUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<datosCreateWithoutDocumentoInput, datosUncheckedCreateWithoutDocumentoInput> | datosCreateWithoutDocumentoInput[] | datosUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutDocumentoInput | datosCreateOrConnectWithoutDocumentoInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutDocumentoInput | datosUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: datosCreateManyDocumentoInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutDocumentoInput | datosUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: datosUpdateManyWithWhereWithoutDocumentoInput | datosUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type civilCreateNestedManyWithoutEstadoInput = {
    create?: XOR<civilCreateWithoutEstadoInput, civilUncheckedCreateWithoutEstadoInput> | civilCreateWithoutEstadoInput[] | civilUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: civilCreateOrConnectWithoutEstadoInput | civilCreateOrConnectWithoutEstadoInput[]
    createMany?: civilCreateManyEstadoInputEnvelope
    connect?: civilWhereUniqueInput | civilWhereUniqueInput[]
  }

  export type documentoCreateNestedManyWithoutEstadoInput = {
    create?: XOR<documentoCreateWithoutEstadoInput, documentoUncheckedCreateWithoutEstadoInput> | documentoCreateWithoutEstadoInput[] | documentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: documentoCreateOrConnectWithoutEstadoInput | documentoCreateOrConnectWithoutEstadoInput[]
    createMany?: documentoCreateManyEstadoInputEnvelope
    connect?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
  }

  export type generoCreateNestedManyWithoutEstadoInput = {
    create?: XOR<generoCreateWithoutEstadoInput, generoUncheckedCreateWithoutEstadoInput> | generoCreateWithoutEstadoInput[] | generoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: generoCreateOrConnectWithoutEstadoInput | generoCreateOrConnectWithoutEstadoInput[]
    createMany?: generoCreateManyEstadoInputEnvelope
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
  }

  export type civilUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<civilCreateWithoutEstadoInput, civilUncheckedCreateWithoutEstadoInput> | civilCreateWithoutEstadoInput[] | civilUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: civilCreateOrConnectWithoutEstadoInput | civilCreateOrConnectWithoutEstadoInput[]
    createMany?: civilCreateManyEstadoInputEnvelope
    connect?: civilWhereUniqueInput | civilWhereUniqueInput[]
  }

  export type documentoUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<documentoCreateWithoutEstadoInput, documentoUncheckedCreateWithoutEstadoInput> | documentoCreateWithoutEstadoInput[] | documentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: documentoCreateOrConnectWithoutEstadoInput | documentoCreateOrConnectWithoutEstadoInput[]
    createMany?: documentoCreateManyEstadoInputEnvelope
    connect?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
  }

  export type generoUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<generoCreateWithoutEstadoInput, generoUncheckedCreateWithoutEstadoInput> | generoCreateWithoutEstadoInput[] | generoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: generoCreateOrConnectWithoutEstadoInput | generoCreateOrConnectWithoutEstadoInput[]
    createMany?: generoCreateManyEstadoInputEnvelope
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
  }

  export type civilUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<civilCreateWithoutEstadoInput, civilUncheckedCreateWithoutEstadoInput> | civilCreateWithoutEstadoInput[] | civilUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: civilCreateOrConnectWithoutEstadoInput | civilCreateOrConnectWithoutEstadoInput[]
    upsert?: civilUpsertWithWhereUniqueWithoutEstadoInput | civilUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: civilCreateManyEstadoInputEnvelope
    set?: civilWhereUniqueInput | civilWhereUniqueInput[]
    disconnect?: civilWhereUniqueInput | civilWhereUniqueInput[]
    delete?: civilWhereUniqueInput | civilWhereUniqueInput[]
    connect?: civilWhereUniqueInput | civilWhereUniqueInput[]
    update?: civilUpdateWithWhereUniqueWithoutEstadoInput | civilUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: civilUpdateManyWithWhereWithoutEstadoInput | civilUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: civilScalarWhereInput | civilScalarWhereInput[]
  }

  export type documentoUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<documentoCreateWithoutEstadoInput, documentoUncheckedCreateWithoutEstadoInput> | documentoCreateWithoutEstadoInput[] | documentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: documentoCreateOrConnectWithoutEstadoInput | documentoCreateOrConnectWithoutEstadoInput[]
    upsert?: documentoUpsertWithWhereUniqueWithoutEstadoInput | documentoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: documentoCreateManyEstadoInputEnvelope
    set?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    disconnect?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    delete?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    connect?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    update?: documentoUpdateWithWhereUniqueWithoutEstadoInput | documentoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: documentoUpdateManyWithWhereWithoutEstadoInput | documentoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: documentoScalarWhereInput | documentoScalarWhereInput[]
  }

  export type generoUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<generoCreateWithoutEstadoInput, generoUncheckedCreateWithoutEstadoInput> | generoCreateWithoutEstadoInput[] | generoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: generoCreateOrConnectWithoutEstadoInput | generoCreateOrConnectWithoutEstadoInput[]
    upsert?: generoUpsertWithWhereUniqueWithoutEstadoInput | generoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: generoCreateManyEstadoInputEnvelope
    set?: generoWhereUniqueInput | generoWhereUniqueInput[]
    disconnect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    delete?: generoWhereUniqueInput | generoWhereUniqueInput[]
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    update?: generoUpdateWithWhereUniqueWithoutEstadoInput | generoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: generoUpdateManyWithWhereWithoutEstadoInput | generoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: generoScalarWhereInput | generoScalarWhereInput[]
  }

  export type civilUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<civilCreateWithoutEstadoInput, civilUncheckedCreateWithoutEstadoInput> | civilCreateWithoutEstadoInput[] | civilUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: civilCreateOrConnectWithoutEstadoInput | civilCreateOrConnectWithoutEstadoInput[]
    upsert?: civilUpsertWithWhereUniqueWithoutEstadoInput | civilUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: civilCreateManyEstadoInputEnvelope
    set?: civilWhereUniqueInput | civilWhereUniqueInput[]
    disconnect?: civilWhereUniqueInput | civilWhereUniqueInput[]
    delete?: civilWhereUniqueInput | civilWhereUniqueInput[]
    connect?: civilWhereUniqueInput | civilWhereUniqueInput[]
    update?: civilUpdateWithWhereUniqueWithoutEstadoInput | civilUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: civilUpdateManyWithWhereWithoutEstadoInput | civilUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: civilScalarWhereInput | civilScalarWhereInput[]
  }

  export type documentoUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<documentoCreateWithoutEstadoInput, documentoUncheckedCreateWithoutEstadoInput> | documentoCreateWithoutEstadoInput[] | documentoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: documentoCreateOrConnectWithoutEstadoInput | documentoCreateOrConnectWithoutEstadoInput[]
    upsert?: documentoUpsertWithWhereUniqueWithoutEstadoInput | documentoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: documentoCreateManyEstadoInputEnvelope
    set?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    disconnect?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    delete?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    connect?: documentoWhereUniqueInput | documentoWhereUniqueInput[]
    update?: documentoUpdateWithWhereUniqueWithoutEstadoInput | documentoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: documentoUpdateManyWithWhereWithoutEstadoInput | documentoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: documentoScalarWhereInput | documentoScalarWhereInput[]
  }

  export type generoUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<generoCreateWithoutEstadoInput, generoUncheckedCreateWithoutEstadoInput> | generoCreateWithoutEstadoInput[] | generoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: generoCreateOrConnectWithoutEstadoInput | generoCreateOrConnectWithoutEstadoInput[]
    upsert?: generoUpsertWithWhereUniqueWithoutEstadoInput | generoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: generoCreateManyEstadoInputEnvelope
    set?: generoWhereUniqueInput | generoWhereUniqueInput[]
    disconnect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    delete?: generoWhereUniqueInput | generoWhereUniqueInput[]
    connect?: generoWhereUniqueInput | generoWhereUniqueInput[]
    update?: generoUpdateWithWhereUniqueWithoutEstadoInput | generoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: generoUpdateManyWithWhereWithoutEstadoInput | generoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: generoScalarWhereInput | generoScalarWhereInput[]
  }

  export type datosCreateNestedManyWithoutGeneroInput = {
    create?: XOR<datosCreateWithoutGeneroInput, datosUncheckedCreateWithoutGeneroInput> | datosCreateWithoutGeneroInput[] | datosUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: datosCreateOrConnectWithoutGeneroInput | datosCreateOrConnectWithoutGeneroInput[]
    createMany?: datosCreateManyGeneroInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type estadoCreateNestedOneWithoutGeneroInput = {
    create?: XOR<estadoCreateWithoutGeneroInput, estadoUncheckedCreateWithoutGeneroInput>
    connectOrCreate?: estadoCreateOrConnectWithoutGeneroInput
    connect?: estadoWhereUniqueInput
  }

  export type datosUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<datosCreateWithoutGeneroInput, datosUncheckedCreateWithoutGeneroInput> | datosCreateWithoutGeneroInput[] | datosUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: datosCreateOrConnectWithoutGeneroInput | datosCreateOrConnectWithoutGeneroInput[]
    createMany?: datosCreateManyGeneroInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<datosCreateWithoutGeneroInput, datosUncheckedCreateWithoutGeneroInput> | datosCreateWithoutGeneroInput[] | datosUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: datosCreateOrConnectWithoutGeneroInput | datosCreateOrConnectWithoutGeneroInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutGeneroInput | datosUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: datosCreateManyGeneroInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutGeneroInput | datosUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: datosUpdateManyWithWhereWithoutGeneroInput | datosUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type estadoUpdateOneWithoutGeneroNestedInput = {
    create?: XOR<estadoCreateWithoutGeneroInput, estadoUncheckedCreateWithoutGeneroInput>
    connectOrCreate?: estadoCreateOrConnectWithoutGeneroInput
    upsert?: estadoUpsertWithoutGeneroInput
    disconnect?: estadoWhereInput | boolean
    delete?: estadoWhereInput | boolean
    connect?: estadoWhereUniqueInput
    update?: XOR<XOR<estadoUpdateToOneWithWhereWithoutGeneroInput, estadoUpdateWithoutGeneroInput>, estadoUncheckedUpdateWithoutGeneroInput>
  }

  export type datosUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<datosCreateWithoutGeneroInput, datosUncheckedCreateWithoutGeneroInput> | datosCreateWithoutGeneroInput[] | datosUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: datosCreateOrConnectWithoutGeneroInput | datosCreateOrConnectWithoutGeneroInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutGeneroInput | datosUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: datosCreateManyGeneroInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutGeneroInput | datosUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: datosUpdateManyWithWhereWithoutGeneroInput | datosUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type mov_asig_auCreateNestedManyWithoutHorariosInput = {
    create?: XOR<mov_asig_auCreateWithoutHorariosInput, mov_asig_auUncheckedCreateWithoutHorariosInput> | mov_asig_auCreateWithoutHorariosInput[] | mov_asig_auUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutHorariosInput | mov_asig_auCreateOrConnectWithoutHorariosInput[]
    createMany?: mov_asig_auCreateManyHorariosInputEnvelope
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
  }

  export type mov_asig_auUncheckedCreateNestedManyWithoutHorariosInput = {
    create?: XOR<mov_asig_auCreateWithoutHorariosInput, mov_asig_auUncheckedCreateWithoutHorariosInput> | mov_asig_auCreateWithoutHorariosInput[] | mov_asig_auUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutHorariosInput | mov_asig_auCreateOrConnectWithoutHorariosInput[]
    createMany?: mov_asig_auCreateManyHorariosInputEnvelope
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type mov_asig_auUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<mov_asig_auCreateWithoutHorariosInput, mov_asig_auUncheckedCreateWithoutHorariosInput> | mov_asig_auCreateWithoutHorariosInput[] | mov_asig_auUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutHorariosInput | mov_asig_auCreateOrConnectWithoutHorariosInput[]
    upsert?: mov_asig_auUpsertWithWhereUniqueWithoutHorariosInput | mov_asig_auUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: mov_asig_auCreateManyHorariosInputEnvelope
    set?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    disconnect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    delete?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    update?: mov_asig_auUpdateWithWhereUniqueWithoutHorariosInput | mov_asig_auUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: mov_asig_auUpdateManyWithWhereWithoutHorariosInput | mov_asig_auUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
  }

  export type mov_asig_auUncheckedUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<mov_asig_auCreateWithoutHorariosInput, mov_asig_auUncheckedCreateWithoutHorariosInput> | mov_asig_auCreateWithoutHorariosInput[] | mov_asig_auUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: mov_asig_auCreateOrConnectWithoutHorariosInput | mov_asig_auCreateOrConnectWithoutHorariosInput[]
    upsert?: mov_asig_auUpsertWithWhereUniqueWithoutHorariosInput | mov_asig_auUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: mov_asig_auCreateManyHorariosInputEnvelope
    set?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    disconnect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    delete?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    connect?: mov_asig_auWhereUniqueInput | mov_asig_auWhereUniqueInput[]
    update?: mov_asig_auUpdateWithWhereUniqueWithoutHorariosInput | mov_asig_auUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: mov_asig_auUpdateManyWithWhereWithoutHorariosInput | mov_asig_auUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
  }

  export type accesoCreateNestedManyWithoutModulosInput = {
    create?: XOR<accesoCreateWithoutModulosInput, accesoUncheckedCreateWithoutModulosInput> | accesoCreateWithoutModulosInput[] | accesoUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: accesoCreateOrConnectWithoutModulosInput | accesoCreateOrConnectWithoutModulosInput[]
    createMany?: accesoCreateManyModulosInputEnvelope
    connect?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
  }

  export type accesoUncheckedCreateNestedManyWithoutModulosInput = {
    create?: XOR<accesoCreateWithoutModulosInput, accesoUncheckedCreateWithoutModulosInput> | accesoCreateWithoutModulosInput[] | accesoUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: accesoCreateOrConnectWithoutModulosInput | accesoCreateOrConnectWithoutModulosInput[]
    createMany?: accesoCreateManyModulosInputEnvelope
    connect?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
  }

  export type accesoUpdateManyWithoutModulosNestedInput = {
    create?: XOR<accesoCreateWithoutModulosInput, accesoUncheckedCreateWithoutModulosInput> | accesoCreateWithoutModulosInput[] | accesoUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: accesoCreateOrConnectWithoutModulosInput | accesoCreateOrConnectWithoutModulosInput[]
    upsert?: accesoUpsertWithWhereUniqueWithoutModulosInput | accesoUpsertWithWhereUniqueWithoutModulosInput[]
    createMany?: accesoCreateManyModulosInputEnvelope
    set?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    disconnect?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    delete?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    connect?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    update?: accesoUpdateWithWhereUniqueWithoutModulosInput | accesoUpdateWithWhereUniqueWithoutModulosInput[]
    updateMany?: accesoUpdateManyWithWhereWithoutModulosInput | accesoUpdateManyWithWhereWithoutModulosInput[]
    deleteMany?: accesoScalarWhereInput | accesoScalarWhereInput[]
  }

  export type accesoUncheckedUpdateManyWithoutModulosNestedInput = {
    create?: XOR<accesoCreateWithoutModulosInput, accesoUncheckedCreateWithoutModulosInput> | accesoCreateWithoutModulosInput[] | accesoUncheckedCreateWithoutModulosInput[]
    connectOrCreate?: accesoCreateOrConnectWithoutModulosInput | accesoCreateOrConnectWithoutModulosInput[]
    upsert?: accesoUpsertWithWhereUniqueWithoutModulosInput | accesoUpsertWithWhereUniqueWithoutModulosInput[]
    createMany?: accesoCreateManyModulosInputEnvelope
    set?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    disconnect?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    delete?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    connect?: accesoWhereUniqueInput | accesoWhereUniqueInput[]
    update?: accesoUpdateWithWhereUniqueWithoutModulosInput | accesoUpdateWithWhereUniqueWithoutModulosInput[]
    updateMany?: accesoUpdateManyWithWhereWithoutModulosInput | accesoUpdateManyWithWhereWithoutModulosInput[]
    deleteMany?: accesoScalarWhereInput | accesoScalarWhereInput[]
  }

  export type asignaturasCreateNestedOneWithoutMov_asig_auInput = {
    create?: XOR<asignaturasCreateWithoutMov_asig_auInput, asignaturasUncheckedCreateWithoutMov_asig_auInput>
    connectOrCreate?: asignaturasCreateOrConnectWithoutMov_asig_auInput
    connect?: asignaturasWhereUniqueInput
  }

  export type aulasCreateNestedOneWithoutMov_asig_auInput = {
    create?: XOR<aulasCreateWithoutMov_asig_auInput, aulasUncheckedCreateWithoutMov_asig_auInput>
    connectOrCreate?: aulasCreateOrConnectWithoutMov_asig_auInput
    connect?: aulasWhereUniqueInput
  }

  export type horariosCreateNestedOneWithoutMov_asig_auInput = {
    create?: XOR<horariosCreateWithoutMov_asig_auInput, horariosUncheckedCreateWithoutMov_asig_auInput>
    connectOrCreate?: horariosCreateOrConnectWithoutMov_asig_auInput
    connect?: horariosWhereUniqueInput
  }

  export type asignaturasUpdateOneWithoutMov_asig_auNestedInput = {
    create?: XOR<asignaturasCreateWithoutMov_asig_auInput, asignaturasUncheckedCreateWithoutMov_asig_auInput>
    connectOrCreate?: asignaturasCreateOrConnectWithoutMov_asig_auInput
    upsert?: asignaturasUpsertWithoutMov_asig_auInput
    disconnect?: asignaturasWhereInput | boolean
    delete?: asignaturasWhereInput | boolean
    connect?: asignaturasWhereUniqueInput
    update?: XOR<XOR<asignaturasUpdateToOneWithWhereWithoutMov_asig_auInput, asignaturasUpdateWithoutMov_asig_auInput>, asignaturasUncheckedUpdateWithoutMov_asig_auInput>
  }

  export type aulasUpdateOneWithoutMov_asig_auNestedInput = {
    create?: XOR<aulasCreateWithoutMov_asig_auInput, aulasUncheckedCreateWithoutMov_asig_auInput>
    connectOrCreate?: aulasCreateOrConnectWithoutMov_asig_auInput
    upsert?: aulasUpsertWithoutMov_asig_auInput
    disconnect?: aulasWhereInput | boolean
    delete?: aulasWhereInput | boolean
    connect?: aulasWhereUniqueInput
    update?: XOR<XOR<aulasUpdateToOneWithWhereWithoutMov_asig_auInput, aulasUpdateWithoutMov_asig_auInput>, aulasUncheckedUpdateWithoutMov_asig_auInput>
  }

  export type horariosUpdateOneWithoutMov_asig_auNestedInput = {
    create?: XOR<horariosCreateWithoutMov_asig_auInput, horariosUncheckedCreateWithoutMov_asig_auInput>
    connectOrCreate?: horariosCreateOrConnectWithoutMov_asig_auInput
    upsert?: horariosUpsertWithoutMov_asig_auInput
    disconnect?: horariosWhereInput | boolean
    delete?: horariosWhereInput | boolean
    connect?: horariosWhereUniqueInput
    update?: XOR<XOR<horariosUpdateToOneWithWhereWithoutMov_asig_auInput, horariosUpdateWithoutMov_asig_auInput>, horariosUncheckedUpdateWithoutMov_asig_auInput>
  }

  export type preofe_mateCreateNestedManyWithoutPregradoInput = {
    create?: XOR<preofe_mateCreateWithoutPregradoInput, preofe_mateUncheckedCreateWithoutPregradoInput> | preofe_mateCreateWithoutPregradoInput[] | preofe_mateUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutPregradoInput | preofe_mateCreateOrConnectWithoutPregradoInput[]
    createMany?: preofe_mateCreateManyPregradoInputEnvelope
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
  }

  export type semestreCreateNestedManyWithoutPregradoInput = {
    create?: XOR<semestreCreateWithoutPregradoInput, semestreUncheckedCreateWithoutPregradoInput> | semestreCreateWithoutPregradoInput[] | semestreUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: semestreCreateOrConnectWithoutPregradoInput | semestreCreateOrConnectWithoutPregradoInput[]
    createMany?: semestreCreateManyPregradoInputEnvelope
    connect?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
  }

  export type datosCreateNestedManyWithoutPregradoInput = {
    create?: XOR<datosCreateWithoutPregradoInput, datosUncheckedCreateWithoutPregradoInput> | datosCreateWithoutPregradoInput[] | datosUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutPregradoInput | datosCreateOrConnectWithoutPregradoInput[]
    createMany?: datosCreateManyPregradoInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type preofe_mateUncheckedCreateNestedManyWithoutPregradoInput = {
    create?: XOR<preofe_mateCreateWithoutPregradoInput, preofe_mateUncheckedCreateWithoutPregradoInput> | preofe_mateCreateWithoutPregradoInput[] | preofe_mateUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutPregradoInput | preofe_mateCreateOrConnectWithoutPregradoInput[]
    createMany?: preofe_mateCreateManyPregradoInputEnvelope
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
  }

  export type semestreUncheckedCreateNestedManyWithoutPregradoInput = {
    create?: XOR<semestreCreateWithoutPregradoInput, semestreUncheckedCreateWithoutPregradoInput> | semestreCreateWithoutPregradoInput[] | semestreUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: semestreCreateOrConnectWithoutPregradoInput | semestreCreateOrConnectWithoutPregradoInput[]
    createMany?: semestreCreateManyPregradoInputEnvelope
    connect?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutPregradoInput = {
    create?: XOR<datosCreateWithoutPregradoInput, datosUncheckedCreateWithoutPregradoInput> | datosCreateWithoutPregradoInput[] | datosUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutPregradoInput | datosCreateOrConnectWithoutPregradoInput[]
    createMany?: datosCreateManyPregradoInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type preofe_mateUpdateManyWithoutPregradoNestedInput = {
    create?: XOR<preofe_mateCreateWithoutPregradoInput, preofe_mateUncheckedCreateWithoutPregradoInput> | preofe_mateCreateWithoutPregradoInput[] | preofe_mateUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutPregradoInput | preofe_mateCreateOrConnectWithoutPregradoInput[]
    upsert?: preofe_mateUpsertWithWhereUniqueWithoutPregradoInput | preofe_mateUpsertWithWhereUniqueWithoutPregradoInput[]
    createMany?: preofe_mateCreateManyPregradoInputEnvelope
    set?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    disconnect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    delete?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    update?: preofe_mateUpdateWithWhereUniqueWithoutPregradoInput | preofe_mateUpdateWithWhereUniqueWithoutPregradoInput[]
    updateMany?: preofe_mateUpdateManyWithWhereWithoutPregradoInput | preofe_mateUpdateManyWithWhereWithoutPregradoInput[]
    deleteMany?: preofe_mateScalarWhereInput | preofe_mateScalarWhereInput[]
  }

  export type semestreUpdateManyWithoutPregradoNestedInput = {
    create?: XOR<semestreCreateWithoutPregradoInput, semestreUncheckedCreateWithoutPregradoInput> | semestreCreateWithoutPregradoInput[] | semestreUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: semestreCreateOrConnectWithoutPregradoInput | semestreCreateOrConnectWithoutPregradoInput[]
    upsert?: semestreUpsertWithWhereUniqueWithoutPregradoInput | semestreUpsertWithWhereUniqueWithoutPregradoInput[]
    createMany?: semestreCreateManyPregradoInputEnvelope
    set?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    disconnect?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    delete?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    connect?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    update?: semestreUpdateWithWhereUniqueWithoutPregradoInput | semestreUpdateWithWhereUniqueWithoutPregradoInput[]
    updateMany?: semestreUpdateManyWithWhereWithoutPregradoInput | semestreUpdateManyWithWhereWithoutPregradoInput[]
    deleteMany?: semestreScalarWhereInput | semestreScalarWhereInput[]
  }

  export type datosUpdateManyWithoutPregradoNestedInput = {
    create?: XOR<datosCreateWithoutPregradoInput, datosUncheckedCreateWithoutPregradoInput> | datosCreateWithoutPregradoInput[] | datosUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutPregradoInput | datosCreateOrConnectWithoutPregradoInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutPregradoInput | datosUpsertWithWhereUniqueWithoutPregradoInput[]
    createMany?: datosCreateManyPregradoInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutPregradoInput | datosUpdateWithWhereUniqueWithoutPregradoInput[]
    updateMany?: datosUpdateManyWithWhereWithoutPregradoInput | datosUpdateManyWithWhereWithoutPregradoInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type preofe_mateUncheckedUpdateManyWithoutPregradoNestedInput = {
    create?: XOR<preofe_mateCreateWithoutPregradoInput, preofe_mateUncheckedCreateWithoutPregradoInput> | preofe_mateCreateWithoutPregradoInput[] | preofe_mateUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: preofe_mateCreateOrConnectWithoutPregradoInput | preofe_mateCreateOrConnectWithoutPregradoInput[]
    upsert?: preofe_mateUpsertWithWhereUniqueWithoutPregradoInput | preofe_mateUpsertWithWhereUniqueWithoutPregradoInput[]
    createMany?: preofe_mateCreateManyPregradoInputEnvelope
    set?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    disconnect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    delete?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    connect?: preofe_mateWhereUniqueInput | preofe_mateWhereUniqueInput[]
    update?: preofe_mateUpdateWithWhereUniqueWithoutPregradoInput | preofe_mateUpdateWithWhereUniqueWithoutPregradoInput[]
    updateMany?: preofe_mateUpdateManyWithWhereWithoutPregradoInput | preofe_mateUpdateManyWithWhereWithoutPregradoInput[]
    deleteMany?: preofe_mateScalarWhereInput | preofe_mateScalarWhereInput[]
  }

  export type semestreUncheckedUpdateManyWithoutPregradoNestedInput = {
    create?: XOR<semestreCreateWithoutPregradoInput, semestreUncheckedCreateWithoutPregradoInput> | semestreCreateWithoutPregradoInput[] | semestreUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: semestreCreateOrConnectWithoutPregradoInput | semestreCreateOrConnectWithoutPregradoInput[]
    upsert?: semestreUpsertWithWhereUniqueWithoutPregradoInput | semestreUpsertWithWhereUniqueWithoutPregradoInput[]
    createMany?: semestreCreateManyPregradoInputEnvelope
    set?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    disconnect?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    delete?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    connect?: semestreWhereUniqueInput | semestreWhereUniqueInput[]
    update?: semestreUpdateWithWhereUniqueWithoutPregradoInput | semestreUpdateWithWhereUniqueWithoutPregradoInput[]
    updateMany?: semestreUpdateManyWithWhereWithoutPregradoInput | semestreUpdateManyWithWhereWithoutPregradoInput[]
    deleteMany?: semestreScalarWhereInput | semestreScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutPregradoNestedInput = {
    create?: XOR<datosCreateWithoutPregradoInput, datosUncheckedCreateWithoutPregradoInput> | datosCreateWithoutPregradoInput[] | datosUncheckedCreateWithoutPregradoInput[]
    connectOrCreate?: datosCreateOrConnectWithoutPregradoInput | datosCreateOrConnectWithoutPregradoInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutPregradoInput | datosUpsertWithWhereUniqueWithoutPregradoInput[]
    createMany?: datosCreateManyPregradoInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutPregradoInput | datosUpdateWithWhereUniqueWithoutPregradoInput[]
    updateMany?: datosUpdateManyWithWhereWithoutPregradoInput | datosUpdateManyWithWhereWithoutPregradoInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type pregradoCreateNestedOneWithoutPreofe_mateInput = {
    create?: XOR<pregradoCreateWithoutPreofe_mateInput, pregradoUncheckedCreateWithoutPreofe_mateInput>
    connectOrCreate?: pregradoCreateOrConnectWithoutPreofe_mateInput
    connect?: pregradoWhereUniqueInput
  }

  export type asignaturasCreateNestedOneWithoutPreofe_mateInput = {
    create?: XOR<asignaturasCreateWithoutPreofe_mateInput, asignaturasUncheckedCreateWithoutPreofe_mateInput>
    connectOrCreate?: asignaturasCreateOrConnectWithoutPreofe_mateInput
    connect?: asignaturasWhereUniqueInput
  }

  export type pregradoUpdateOneWithoutPreofe_mateNestedInput = {
    create?: XOR<pregradoCreateWithoutPreofe_mateInput, pregradoUncheckedCreateWithoutPreofe_mateInput>
    connectOrCreate?: pregradoCreateOrConnectWithoutPreofe_mateInput
    upsert?: pregradoUpsertWithoutPreofe_mateInput
    disconnect?: pregradoWhereInput | boolean
    delete?: pregradoWhereInput | boolean
    connect?: pregradoWhereUniqueInput
    update?: XOR<XOR<pregradoUpdateToOneWithWhereWithoutPreofe_mateInput, pregradoUpdateWithoutPreofe_mateInput>, pregradoUncheckedUpdateWithoutPreofe_mateInput>
  }

  export type asignaturasUpdateOneWithoutPreofe_mateNestedInput = {
    create?: XOR<asignaturasCreateWithoutPreofe_mateInput, asignaturasUncheckedCreateWithoutPreofe_mateInput>
    connectOrCreate?: asignaturasCreateOrConnectWithoutPreofe_mateInput
    upsert?: asignaturasUpsertWithoutPreofe_mateInput
    disconnect?: asignaturasWhereInput | boolean
    delete?: asignaturasWhereInput | boolean
    connect?: asignaturasWhereUniqueInput
    update?: XOR<XOR<asignaturasUpdateToOneWithWhereWithoutPreofe_mateInput, asignaturasUpdateWithoutPreofe_mateInput>, asignaturasUncheckedUpdateWithoutPreofe_mateInput>
  }

  export type pregradoCreateNestedOneWithoutSemestreInput = {
    create?: XOR<pregradoCreateWithoutSemestreInput, pregradoUncheckedCreateWithoutSemestreInput>
    connectOrCreate?: pregradoCreateOrConnectWithoutSemestreInput
    connect?: pregradoWhereUniqueInput
  }

  export type datosCreateNestedManyWithoutSemestreInput = {
    create?: XOR<datosCreateWithoutSemestreInput, datosUncheckedCreateWithoutSemestreInput> | datosCreateWithoutSemestreInput[] | datosUncheckedCreateWithoutSemestreInput[]
    connectOrCreate?: datosCreateOrConnectWithoutSemestreInput | datosCreateOrConnectWithoutSemestreInput[]
    createMany?: datosCreateManySemestreInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutSemestreInput = {
    create?: XOR<datosCreateWithoutSemestreInput, datosUncheckedCreateWithoutSemestreInput> | datosCreateWithoutSemestreInput[] | datosUncheckedCreateWithoutSemestreInput[]
    connectOrCreate?: datosCreateOrConnectWithoutSemestreInput | datosCreateOrConnectWithoutSemestreInput[]
    createMany?: datosCreateManySemestreInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type pregradoUpdateOneWithoutSemestreNestedInput = {
    create?: XOR<pregradoCreateWithoutSemestreInput, pregradoUncheckedCreateWithoutSemestreInput>
    connectOrCreate?: pregradoCreateOrConnectWithoutSemestreInput
    upsert?: pregradoUpsertWithoutSemestreInput
    disconnect?: pregradoWhereInput | boolean
    delete?: pregradoWhereInput | boolean
    connect?: pregradoWhereUniqueInput
    update?: XOR<XOR<pregradoUpdateToOneWithWhereWithoutSemestreInput, pregradoUpdateWithoutSemestreInput>, pregradoUncheckedUpdateWithoutSemestreInput>
  }

  export type datosUpdateManyWithoutSemestreNestedInput = {
    create?: XOR<datosCreateWithoutSemestreInput, datosUncheckedCreateWithoutSemestreInput> | datosCreateWithoutSemestreInput[] | datosUncheckedCreateWithoutSemestreInput[]
    connectOrCreate?: datosCreateOrConnectWithoutSemestreInput | datosCreateOrConnectWithoutSemestreInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutSemestreInput | datosUpsertWithWhereUniqueWithoutSemestreInput[]
    createMany?: datosCreateManySemestreInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutSemestreInput | datosUpdateWithWhereUniqueWithoutSemestreInput[]
    updateMany?: datosUpdateManyWithWhereWithoutSemestreInput | datosUpdateManyWithWhereWithoutSemestreInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutSemestreNestedInput = {
    create?: XOR<datosCreateWithoutSemestreInput, datosUncheckedCreateWithoutSemestreInput> | datosCreateWithoutSemestreInput[] | datosUncheckedCreateWithoutSemestreInput[]
    connectOrCreate?: datosCreateOrConnectWithoutSemestreInput | datosCreateOrConnectWithoutSemestreInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutSemestreInput | datosUpsertWithWhereUniqueWithoutSemestreInput[]
    createMany?: datosCreateManySemestreInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutSemestreInput | datosUpdateWithWhereUniqueWithoutSemestreInput[]
    updateMany?: datosUpdateManyWithWhereWithoutSemestreInput | datosUpdateManyWithWhereWithoutSemestreInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosCreateNestedManyWithoutTipo_statusInput = {
    create?: XOR<datosCreateWithoutTipo_statusInput, datosUncheckedCreateWithoutTipo_statusInput> | datosCreateWithoutTipo_statusInput[] | datosUncheckedCreateWithoutTipo_statusInput[]
    connectOrCreate?: datosCreateOrConnectWithoutTipo_statusInput | datosCreateOrConnectWithoutTipo_statusInput[]
    createMany?: datosCreateManyTipo_statusInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUncheckedCreateNestedManyWithoutTipo_statusInput = {
    create?: XOR<datosCreateWithoutTipo_statusInput, datosUncheckedCreateWithoutTipo_statusInput> | datosCreateWithoutTipo_statusInput[] | datosUncheckedCreateWithoutTipo_statusInput[]
    connectOrCreate?: datosCreateOrConnectWithoutTipo_statusInput | datosCreateOrConnectWithoutTipo_statusInput[]
    createMany?: datosCreateManyTipo_statusInputEnvelope
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
  }

  export type datosUpdateManyWithoutTipo_statusNestedInput = {
    create?: XOR<datosCreateWithoutTipo_statusInput, datosUncheckedCreateWithoutTipo_statusInput> | datosCreateWithoutTipo_statusInput[] | datosUncheckedCreateWithoutTipo_statusInput[]
    connectOrCreate?: datosCreateOrConnectWithoutTipo_statusInput | datosCreateOrConnectWithoutTipo_statusInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutTipo_statusInput | datosUpsertWithWhereUniqueWithoutTipo_statusInput[]
    createMany?: datosCreateManyTipo_statusInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutTipo_statusInput | datosUpdateWithWhereUniqueWithoutTipo_statusInput[]
    updateMany?: datosUpdateManyWithWhereWithoutTipo_statusInput | datosUpdateManyWithWhereWithoutTipo_statusInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type datosUncheckedUpdateManyWithoutTipo_statusNestedInput = {
    create?: XOR<datosCreateWithoutTipo_statusInput, datosUncheckedCreateWithoutTipo_statusInput> | datosCreateWithoutTipo_statusInput[] | datosUncheckedCreateWithoutTipo_statusInput[]
    connectOrCreate?: datosCreateOrConnectWithoutTipo_statusInput | datosCreateOrConnectWithoutTipo_statusInput[]
    upsert?: datosUpsertWithWhereUniqueWithoutTipo_statusInput | datosUpsertWithWhereUniqueWithoutTipo_statusInput[]
    createMany?: datosCreateManyTipo_statusInputEnvelope
    set?: datosWhereUniqueInput | datosWhereUniqueInput[]
    disconnect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    delete?: datosWhereUniqueInput | datosWhereUniqueInput[]
    connect?: datosWhereUniqueInput | datosWhereUniqueInput[]
    update?: datosUpdateWithWhereUniqueWithoutTipo_statusInput | datosUpdateWithWhereUniqueWithoutTipo_statusInput[]
    updateMany?: datosUpdateManyWithWhereWithoutTipo_statusInput | datosUpdateManyWithWhereWithoutTipo_statusInput[]
    deleteMany?: datosScalarWhereInput | datosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type modulosCreateWithoutAccesoInput = {
    pk_modulos: number
    nombre?: string | null
  }

  export type modulosUncheckedCreateWithoutAccesoInput = {
    pk_modulos: number
    nombre?: string | null
  }

  export type modulosCreateOrConnectWithoutAccesoInput = {
    where: modulosWhereUniqueInput
    create: XOR<modulosCreateWithoutAccesoInput, modulosUncheckedCreateWithoutAccesoInput>
  }

  export type modulosUpsertWithoutAccesoInput = {
    update: XOR<modulosUpdateWithoutAccesoInput, modulosUncheckedUpdateWithoutAccesoInput>
    create: XOR<modulosCreateWithoutAccesoInput, modulosUncheckedCreateWithoutAccesoInput>
    where?: modulosWhereInput
  }

  export type modulosUpdateToOneWithWhereWithoutAccesoInput = {
    where?: modulosWhereInput
    data: XOR<modulosUpdateWithoutAccesoInput, modulosUncheckedUpdateWithoutAccesoInput>
  }

  export type modulosUpdateWithoutAccesoInput = {
    pk_modulos?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modulosUncheckedUpdateWithoutAccesoInput = {
    pk_modulos?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mov_asig_auCreateWithoutAsignaturasInput = {
    aulas?: aulasCreateNestedOneWithoutMov_asig_auInput
    horarios?: horariosCreateNestedOneWithoutMov_asig_auInput
  }

  export type mov_asig_auUncheckedCreateWithoutAsignaturasInput = {
    pk_mov?: number
    fk_aula?: number | null
    fk_horario?: number | null
  }

  export type mov_asig_auCreateOrConnectWithoutAsignaturasInput = {
    where: mov_asig_auWhereUniqueInput
    create: XOR<mov_asig_auCreateWithoutAsignaturasInput, mov_asig_auUncheckedCreateWithoutAsignaturasInput>
  }

  export type mov_asig_auCreateManyAsignaturasInputEnvelope = {
    data: mov_asig_auCreateManyAsignaturasInput | mov_asig_auCreateManyAsignaturasInput[]
    skipDuplicates?: boolean
  }

  export type preofe_mateCreateWithoutAsignaturasInput = {
    pregrado?: pregradoCreateNestedOneWithoutPreofe_mateInput
  }

  export type preofe_mateUncheckedCreateWithoutAsignaturasInput = {
    pk_preofe?: number
    fk_pregrado?: number | null
  }

  export type preofe_mateCreateOrConnectWithoutAsignaturasInput = {
    where: preofe_mateWhereUniqueInput
    create: XOR<preofe_mateCreateWithoutAsignaturasInput, preofe_mateUncheckedCreateWithoutAsignaturasInput>
  }

  export type preofe_mateCreateManyAsignaturasInputEnvelope = {
    data: preofe_mateCreateManyAsignaturasInput | preofe_mateCreateManyAsignaturasInput[]
    skipDuplicates?: boolean
  }

  export type mov_asig_auUpsertWithWhereUniqueWithoutAsignaturasInput = {
    where: mov_asig_auWhereUniqueInput
    update: XOR<mov_asig_auUpdateWithoutAsignaturasInput, mov_asig_auUncheckedUpdateWithoutAsignaturasInput>
    create: XOR<mov_asig_auCreateWithoutAsignaturasInput, mov_asig_auUncheckedCreateWithoutAsignaturasInput>
  }

  export type mov_asig_auUpdateWithWhereUniqueWithoutAsignaturasInput = {
    where: mov_asig_auWhereUniqueInput
    data: XOR<mov_asig_auUpdateWithoutAsignaturasInput, mov_asig_auUncheckedUpdateWithoutAsignaturasInput>
  }

  export type mov_asig_auUpdateManyWithWhereWithoutAsignaturasInput = {
    where: mov_asig_auScalarWhereInput
    data: XOR<mov_asig_auUpdateManyMutationInput, mov_asig_auUncheckedUpdateManyWithoutAsignaturasInput>
  }

  export type mov_asig_auScalarWhereInput = {
    AND?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
    OR?: mov_asig_auScalarWhereInput[]
    NOT?: mov_asig_auScalarWhereInput | mov_asig_auScalarWhereInput[]
    pk_mov?: IntFilter<"mov_asig_au"> | number
    fk_asignatura?: IntNullableFilter<"mov_asig_au"> | number | null
    fk_aula?: IntNullableFilter<"mov_asig_au"> | number | null
    fk_horario?: IntNullableFilter<"mov_asig_au"> | number | null
  }

  export type preofe_mateUpsertWithWhereUniqueWithoutAsignaturasInput = {
    where: preofe_mateWhereUniqueInput
    update: XOR<preofe_mateUpdateWithoutAsignaturasInput, preofe_mateUncheckedUpdateWithoutAsignaturasInput>
    create: XOR<preofe_mateCreateWithoutAsignaturasInput, preofe_mateUncheckedCreateWithoutAsignaturasInput>
  }

  export type preofe_mateUpdateWithWhereUniqueWithoutAsignaturasInput = {
    where: preofe_mateWhereUniqueInput
    data: XOR<preofe_mateUpdateWithoutAsignaturasInput, preofe_mateUncheckedUpdateWithoutAsignaturasInput>
  }

  export type preofe_mateUpdateManyWithWhereWithoutAsignaturasInput = {
    where: preofe_mateScalarWhereInput
    data: XOR<preofe_mateUpdateManyMutationInput, preofe_mateUncheckedUpdateManyWithoutAsignaturasInput>
  }

  export type preofe_mateScalarWhereInput = {
    AND?: preofe_mateScalarWhereInput | preofe_mateScalarWhereInput[]
    OR?: preofe_mateScalarWhereInput[]
    NOT?: preofe_mateScalarWhereInput | preofe_mateScalarWhereInput[]
    pk_preofe?: IntFilter<"preofe_mate"> | number
    fk_pregrado?: IntNullableFilter<"preofe_mate"> | number | null
    fk_asignatura?: IntNullableFilter<"preofe_mate"> | number | null
  }

  export type mov_asig_auCreateWithoutAulasInput = {
    asignaturas?: asignaturasCreateNestedOneWithoutMov_asig_auInput
    horarios?: horariosCreateNestedOneWithoutMov_asig_auInput
  }

  export type mov_asig_auUncheckedCreateWithoutAulasInput = {
    pk_mov?: number
    fk_asignatura?: number | null
    fk_horario?: number | null
  }

  export type mov_asig_auCreateOrConnectWithoutAulasInput = {
    where: mov_asig_auWhereUniqueInput
    create: XOR<mov_asig_auCreateWithoutAulasInput, mov_asig_auUncheckedCreateWithoutAulasInput>
  }

  export type mov_asig_auCreateManyAulasInputEnvelope = {
    data: mov_asig_auCreateManyAulasInput | mov_asig_auCreateManyAulasInput[]
    skipDuplicates?: boolean
  }

  export type mov_asig_auUpsertWithWhereUniqueWithoutAulasInput = {
    where: mov_asig_auWhereUniqueInput
    update: XOR<mov_asig_auUpdateWithoutAulasInput, mov_asig_auUncheckedUpdateWithoutAulasInput>
    create: XOR<mov_asig_auCreateWithoutAulasInput, mov_asig_auUncheckedCreateWithoutAulasInput>
  }

  export type mov_asig_auUpdateWithWhereUniqueWithoutAulasInput = {
    where: mov_asig_auWhereUniqueInput
    data: XOR<mov_asig_auUpdateWithoutAulasInput, mov_asig_auUncheckedUpdateWithoutAulasInput>
  }

  export type mov_asig_auUpdateManyWithWhereWithoutAulasInput = {
    where: mov_asig_auScalarWhereInput
    data: XOR<mov_asig_auUpdateManyMutationInput, mov_asig_auUncheckedUpdateManyWithoutAulasInput>
  }

  export type estadoCreateWithoutCivilInput = {
    pk_id_estado: number
    nombre?: string | null
    documento?: documentoCreateNestedManyWithoutEstadoInput
    genero?: generoCreateNestedManyWithoutEstadoInput
  }

  export type estadoUncheckedCreateWithoutCivilInput = {
    pk_id_estado: number
    nombre?: string | null
    documento?: documentoUncheckedCreateNestedManyWithoutEstadoInput
    genero?: generoUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type estadoCreateOrConnectWithoutCivilInput = {
    where: estadoWhereUniqueInput
    create: XOR<estadoCreateWithoutCivilInput, estadoUncheckedCreateWithoutCivilInput>
  }

  export type datosCreateWithoutCivilInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    documento?: documentoCreateNestedOneWithoutDatosInput
    genero?: generoCreateNestedOneWithoutDatosInput
    pregrado?: pregradoCreateNestedOneWithoutDatosInput
    semestre?: semestreCreateNestedOneWithoutDatosInput
    tipo_status?: tipo_statusCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutCivilInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosCreateOrConnectWithoutCivilInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutCivilInput, datosUncheckedCreateWithoutCivilInput>
  }

  export type datosCreateManyCivilInputEnvelope = {
    data: datosCreateManyCivilInput | datosCreateManyCivilInput[]
    skipDuplicates?: boolean
  }

  export type estadoUpsertWithoutCivilInput = {
    update: XOR<estadoUpdateWithoutCivilInput, estadoUncheckedUpdateWithoutCivilInput>
    create: XOR<estadoCreateWithoutCivilInput, estadoUncheckedCreateWithoutCivilInput>
    where?: estadoWhereInput
  }

  export type estadoUpdateToOneWithWhereWithoutCivilInput = {
    where?: estadoWhereInput
    data: XOR<estadoUpdateWithoutCivilInput, estadoUncheckedUpdateWithoutCivilInput>
  }

  export type estadoUpdateWithoutCivilInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateManyWithoutEstadoNestedInput
    genero?: generoUpdateManyWithoutEstadoNestedInput
  }

  export type estadoUncheckedUpdateWithoutCivilInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUncheckedUpdateManyWithoutEstadoNestedInput
    genero?: generoUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type datosUpsertWithWhereUniqueWithoutCivilInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutCivilInput, datosUncheckedUpdateWithoutCivilInput>
    create: XOR<datosCreateWithoutCivilInput, datosUncheckedCreateWithoutCivilInput>
  }

  export type datosUpdateWithWhereUniqueWithoutCivilInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutCivilInput, datosUncheckedUpdateWithoutCivilInput>
  }

  export type datosUpdateManyWithWhereWithoutCivilInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutCivilInput>
  }

  export type datosScalarWhereInput = {
    AND?: datosScalarWhereInput | datosScalarWhereInput[]
    OR?: datosScalarWhereInput[]
    NOT?: datosScalarWhereInput | datosScalarWhereInput[]
    pk_dato?: IntFilter<"datos"> | number
    nombre?: StringNullableFilter<"datos"> | string | null
    apellido?: StringNullableFilter<"datos"> | string | null
    fk_id_doc?: IntNullableFilter<"datos"> | number | null
    fk_id_civil?: IntNullableFilter<"datos"> | number | null
    fk_id_gene?: IntNullableFilter<"datos"> | number | null
    correo?: StringNullableFilter<"datos"> | string | null
    telefono?: StringNullableFilter<"datos"> | string | null
    fk_pregrado?: IntNullableFilter<"datos"> | number | null
    fk_id_semestre?: IntNullableFilter<"datos"> | number | null
    fk_id_tipo_status?: IntNullableFilter<"datos"> | number | null
    asignatura?: StringNullableFilter<"datos"> | string | null
    salon?: StringNullableFilter<"datos"> | string | null
    dia?: StringNullableFilter<"datos"> | string | null
    hora_inicio?: StringNullableFilter<"datos"> | string | null
    hora_fin?: StringNullableFilter<"datos"> | string | null
  }

  export type documentoCreateWithoutDatosInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    estado?: estadoCreateNestedOneWithoutDocumentoInput
  }

  export type documentoUncheckedCreateWithoutDatosInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    fk_id_estado?: number | null
  }

  export type documentoCreateOrConnectWithoutDatosInput = {
    where: documentoWhereUniqueInput
    create: XOR<documentoCreateWithoutDatosInput, documentoUncheckedCreateWithoutDatosInput>
  }

  export type civilCreateWithoutDatosInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    estado?: estadoCreateNestedOneWithoutCivilInput
  }

  export type civilUncheckedCreateWithoutDatosInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    fk_id_estado?: number | null
  }

  export type civilCreateOrConnectWithoutDatosInput = {
    where: civilWhereUniqueInput
    create: XOR<civilCreateWithoutDatosInput, civilUncheckedCreateWithoutDatosInput>
  }

  export type generoCreateWithoutDatosInput = {
    pk_id_gene: number
    nom_genero?: string | null
    estado?: estadoCreateNestedOneWithoutGeneroInput
  }

  export type generoUncheckedCreateWithoutDatosInput = {
    pk_id_gene: number
    nom_genero?: string | null
    fk_id_estado?: number | null
  }

  export type generoCreateOrConnectWithoutDatosInput = {
    where: generoWhereUniqueInput
    create: XOR<generoCreateWithoutDatosInput, generoUncheckedCreateWithoutDatosInput>
  }

  export type pregradoCreateWithoutDatosInput = {
    nombre_pregrado?: string | null
    preofe_mate?: preofe_mateCreateNestedManyWithoutPregradoInput
    semestre?: semestreCreateNestedManyWithoutPregradoInput
  }

  export type pregradoUncheckedCreateWithoutDatosInput = {
    pk_pregrado?: number
    nombre_pregrado?: string | null
    preofe_mate?: preofe_mateUncheckedCreateNestedManyWithoutPregradoInput
    semestre?: semestreUncheckedCreateNestedManyWithoutPregradoInput
  }

  export type pregradoCreateOrConnectWithoutDatosInput = {
    where: pregradoWhereUniqueInput
    create: XOR<pregradoCreateWithoutDatosInput, pregradoUncheckedCreateWithoutDatosInput>
  }

  export type semestreCreateWithoutDatosInput = {
    numero?: number | null
    pregrado?: pregradoCreateNestedOneWithoutSemestreInput
  }

  export type semestreUncheckedCreateWithoutDatosInput = {
    pk_semestre?: number
    numero?: number | null
    fk_pregrado?: number | null
  }

  export type semestreCreateOrConnectWithoutDatosInput = {
    where: semestreWhereUniqueInput
    create: XOR<semestreCreateWithoutDatosInput, semestreUncheckedCreateWithoutDatosInput>
  }

  export type tipo_statusCreateWithoutDatosInput = {
    nombre_status?: string | null
  }

  export type tipo_statusUncheckedCreateWithoutDatosInput = {
    pk_status?: number
    nombre_status?: string | null
  }

  export type tipo_statusCreateOrConnectWithoutDatosInput = {
    where: tipo_statusWhereUniqueInput
    create: XOR<tipo_statusCreateWithoutDatosInput, tipo_statusUncheckedCreateWithoutDatosInput>
  }

  export type documentoUpsertWithoutDatosInput = {
    update: XOR<documentoUpdateWithoutDatosInput, documentoUncheckedUpdateWithoutDatosInput>
    create: XOR<documentoCreateWithoutDatosInput, documentoUncheckedCreateWithoutDatosInput>
    where?: documentoWhereInput
  }

  export type documentoUpdateToOneWithWhereWithoutDatosInput = {
    where?: documentoWhereInput
    data: XOR<documentoUpdateWithoutDatosInput, documentoUncheckedUpdateWithoutDatosInput>
  }

  export type documentoUpdateWithoutDatosInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: estadoUpdateOneWithoutDocumentoNestedInput
  }

  export type documentoUncheckedUpdateWithoutDatosInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type civilUpsertWithoutDatosInput = {
    update: XOR<civilUpdateWithoutDatosInput, civilUncheckedUpdateWithoutDatosInput>
    create: XOR<civilCreateWithoutDatosInput, civilUncheckedCreateWithoutDatosInput>
    where?: civilWhereInput
  }

  export type civilUpdateToOneWithWhereWithoutDatosInput = {
    where?: civilWhereInput
    data: XOR<civilUpdateWithoutDatosInput, civilUncheckedUpdateWithoutDatosInput>
  }

  export type civilUpdateWithoutDatosInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: estadoUpdateOneWithoutCivilNestedInput
  }

  export type civilUncheckedUpdateWithoutDatosInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type generoUpsertWithoutDatosInput = {
    update: XOR<generoUpdateWithoutDatosInput, generoUncheckedUpdateWithoutDatosInput>
    create: XOR<generoCreateWithoutDatosInput, generoUncheckedCreateWithoutDatosInput>
    where?: generoWhereInput
  }

  export type generoUpdateToOneWithWhereWithoutDatosInput = {
    where?: generoWhereInput
    data: XOR<generoUpdateWithoutDatosInput, generoUncheckedUpdateWithoutDatosInput>
  }

  export type generoUpdateWithoutDatosInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: estadoUpdateOneWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateWithoutDatosInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pregradoUpsertWithoutDatosInput = {
    update: XOR<pregradoUpdateWithoutDatosInput, pregradoUncheckedUpdateWithoutDatosInput>
    create: XOR<pregradoCreateWithoutDatosInput, pregradoUncheckedCreateWithoutDatosInput>
    where?: pregradoWhereInput
  }

  export type pregradoUpdateToOneWithWhereWithoutDatosInput = {
    where?: pregradoWhereInput
    data: XOR<pregradoUpdateWithoutDatosInput, pregradoUncheckedUpdateWithoutDatosInput>
  }

  export type pregradoUpdateWithoutDatosInput = {
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUpdateManyWithoutPregradoNestedInput
    semestre?: semestreUpdateManyWithoutPregradoNestedInput
  }

  export type pregradoUncheckedUpdateWithoutDatosInput = {
    pk_pregrado?: IntFieldUpdateOperationsInput | number
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUncheckedUpdateManyWithoutPregradoNestedInput
    semestre?: semestreUncheckedUpdateManyWithoutPregradoNestedInput
  }

  export type semestreUpsertWithoutDatosInput = {
    update: XOR<semestreUpdateWithoutDatosInput, semestreUncheckedUpdateWithoutDatosInput>
    create: XOR<semestreCreateWithoutDatosInput, semestreUncheckedCreateWithoutDatosInput>
    where?: semestreWhereInput
  }

  export type semestreUpdateToOneWithWhereWithoutDatosInput = {
    where?: semestreWhereInput
    data: XOR<semestreUpdateWithoutDatosInput, semestreUncheckedUpdateWithoutDatosInput>
  }

  export type semestreUpdateWithoutDatosInput = {
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    pregrado?: pregradoUpdateOneWithoutSemestreNestedInput
  }

  export type semestreUncheckedUpdateWithoutDatosInput = {
    pk_semestre?: IntFieldUpdateOperationsInput | number
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipo_statusUpsertWithoutDatosInput = {
    update: XOR<tipo_statusUpdateWithoutDatosInput, tipo_statusUncheckedUpdateWithoutDatosInput>
    create: XOR<tipo_statusCreateWithoutDatosInput, tipo_statusUncheckedCreateWithoutDatosInput>
    where?: tipo_statusWhereInput
  }

  export type tipo_statusUpdateToOneWithWhereWithoutDatosInput = {
    where?: tipo_statusWhereInput
    data: XOR<tipo_statusUpdateWithoutDatosInput, tipo_statusUncheckedUpdateWithoutDatosInput>
  }

  export type tipo_statusUpdateWithoutDatosInput = {
    nombre_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_statusUncheckedUpdateWithoutDatosInput = {
    pk_status?: IntFieldUpdateOperationsInput | number
    nombre_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosCreateWithoutDocumentoInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    civil?: civilCreateNestedOneWithoutDatosInput
    genero?: generoCreateNestedOneWithoutDatosInput
    pregrado?: pregradoCreateNestedOneWithoutDatosInput
    semestre?: semestreCreateNestedOneWithoutDatosInput
    tipo_status?: tipo_statusCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutDocumentoInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosCreateOrConnectWithoutDocumentoInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutDocumentoInput, datosUncheckedCreateWithoutDocumentoInput>
  }

  export type datosCreateManyDocumentoInputEnvelope = {
    data: datosCreateManyDocumentoInput | datosCreateManyDocumentoInput[]
    skipDuplicates?: boolean
  }

  export type estadoCreateWithoutDocumentoInput = {
    pk_id_estado: number
    nombre?: string | null
    civil?: civilCreateNestedManyWithoutEstadoInput
    genero?: generoCreateNestedManyWithoutEstadoInput
  }

  export type estadoUncheckedCreateWithoutDocumentoInput = {
    pk_id_estado: number
    nombre?: string | null
    civil?: civilUncheckedCreateNestedManyWithoutEstadoInput
    genero?: generoUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type estadoCreateOrConnectWithoutDocumentoInput = {
    where: estadoWhereUniqueInput
    create: XOR<estadoCreateWithoutDocumentoInput, estadoUncheckedCreateWithoutDocumentoInput>
  }

  export type datosUpsertWithWhereUniqueWithoutDocumentoInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutDocumentoInput, datosUncheckedUpdateWithoutDocumentoInput>
    create: XOR<datosCreateWithoutDocumentoInput, datosUncheckedCreateWithoutDocumentoInput>
  }

  export type datosUpdateWithWhereUniqueWithoutDocumentoInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutDocumentoInput, datosUncheckedUpdateWithoutDocumentoInput>
  }

  export type datosUpdateManyWithWhereWithoutDocumentoInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutDocumentoInput>
  }

  export type estadoUpsertWithoutDocumentoInput = {
    update: XOR<estadoUpdateWithoutDocumentoInput, estadoUncheckedUpdateWithoutDocumentoInput>
    create: XOR<estadoCreateWithoutDocumentoInput, estadoUncheckedCreateWithoutDocumentoInput>
    where?: estadoWhereInput
  }

  export type estadoUpdateToOneWithWhereWithoutDocumentoInput = {
    where?: estadoWhereInput
    data: XOR<estadoUpdateWithoutDocumentoInput, estadoUncheckedUpdateWithoutDocumentoInput>
  }

  export type estadoUpdateWithoutDocumentoInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUpdateManyWithoutEstadoNestedInput
    genero?: generoUpdateManyWithoutEstadoNestedInput
  }

  export type estadoUncheckedUpdateWithoutDocumentoInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUncheckedUpdateManyWithoutEstadoNestedInput
    genero?: generoUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type civilCreateWithoutEstadoInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    datos?: datosCreateNestedManyWithoutCivilInput
  }

  export type civilUncheckedCreateWithoutEstadoInput = {
    pk_id_civil: number
    nombre_civil?: string | null
    datos?: datosUncheckedCreateNestedManyWithoutCivilInput
  }

  export type civilCreateOrConnectWithoutEstadoInput = {
    where: civilWhereUniqueInput
    create: XOR<civilCreateWithoutEstadoInput, civilUncheckedCreateWithoutEstadoInput>
  }

  export type civilCreateManyEstadoInputEnvelope = {
    data: civilCreateManyEstadoInput | civilCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type documentoCreateWithoutEstadoInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    datos?: datosCreateNestedManyWithoutDocumentoInput
  }

  export type documentoUncheckedCreateWithoutEstadoInput = {
    pk_id_doc: number
    nombre_documento?: string | null
    datos?: datosUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type documentoCreateOrConnectWithoutEstadoInput = {
    where: documentoWhereUniqueInput
    create: XOR<documentoCreateWithoutEstadoInput, documentoUncheckedCreateWithoutEstadoInput>
  }

  export type documentoCreateManyEstadoInputEnvelope = {
    data: documentoCreateManyEstadoInput | documentoCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type generoCreateWithoutEstadoInput = {
    pk_id_gene: number
    nom_genero?: string | null
    datos?: datosCreateNestedManyWithoutGeneroInput
  }

  export type generoUncheckedCreateWithoutEstadoInput = {
    pk_id_gene: number
    nom_genero?: string | null
    datos?: datosUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type generoCreateOrConnectWithoutEstadoInput = {
    where: generoWhereUniqueInput
    create: XOR<generoCreateWithoutEstadoInput, generoUncheckedCreateWithoutEstadoInput>
  }

  export type generoCreateManyEstadoInputEnvelope = {
    data: generoCreateManyEstadoInput | generoCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type civilUpsertWithWhereUniqueWithoutEstadoInput = {
    where: civilWhereUniqueInput
    update: XOR<civilUpdateWithoutEstadoInput, civilUncheckedUpdateWithoutEstadoInput>
    create: XOR<civilCreateWithoutEstadoInput, civilUncheckedCreateWithoutEstadoInput>
  }

  export type civilUpdateWithWhereUniqueWithoutEstadoInput = {
    where: civilWhereUniqueInput
    data: XOR<civilUpdateWithoutEstadoInput, civilUncheckedUpdateWithoutEstadoInput>
  }

  export type civilUpdateManyWithWhereWithoutEstadoInput = {
    where: civilScalarWhereInput
    data: XOR<civilUpdateManyMutationInput, civilUncheckedUpdateManyWithoutEstadoInput>
  }

  export type civilScalarWhereInput = {
    AND?: civilScalarWhereInput | civilScalarWhereInput[]
    OR?: civilScalarWhereInput[]
    NOT?: civilScalarWhereInput | civilScalarWhereInput[]
    pk_id_civil?: IntFilter<"civil"> | number
    nombre_civil?: StringNullableFilter<"civil"> | string | null
    fk_id_estado?: IntNullableFilter<"civil"> | number | null
  }

  export type documentoUpsertWithWhereUniqueWithoutEstadoInput = {
    where: documentoWhereUniqueInput
    update: XOR<documentoUpdateWithoutEstadoInput, documentoUncheckedUpdateWithoutEstadoInput>
    create: XOR<documentoCreateWithoutEstadoInput, documentoUncheckedCreateWithoutEstadoInput>
  }

  export type documentoUpdateWithWhereUniqueWithoutEstadoInput = {
    where: documentoWhereUniqueInput
    data: XOR<documentoUpdateWithoutEstadoInput, documentoUncheckedUpdateWithoutEstadoInput>
  }

  export type documentoUpdateManyWithWhereWithoutEstadoInput = {
    where: documentoScalarWhereInput
    data: XOR<documentoUpdateManyMutationInput, documentoUncheckedUpdateManyWithoutEstadoInput>
  }

  export type documentoScalarWhereInput = {
    AND?: documentoScalarWhereInput | documentoScalarWhereInput[]
    OR?: documentoScalarWhereInput[]
    NOT?: documentoScalarWhereInput | documentoScalarWhereInput[]
    pk_id_doc?: IntFilter<"documento"> | number
    nombre_documento?: StringNullableFilter<"documento"> | string | null
    fk_id_estado?: IntNullableFilter<"documento"> | number | null
  }

  export type generoUpsertWithWhereUniqueWithoutEstadoInput = {
    where: generoWhereUniqueInput
    update: XOR<generoUpdateWithoutEstadoInput, generoUncheckedUpdateWithoutEstadoInput>
    create: XOR<generoCreateWithoutEstadoInput, generoUncheckedCreateWithoutEstadoInput>
  }

  export type generoUpdateWithWhereUniqueWithoutEstadoInput = {
    where: generoWhereUniqueInput
    data: XOR<generoUpdateWithoutEstadoInput, generoUncheckedUpdateWithoutEstadoInput>
  }

  export type generoUpdateManyWithWhereWithoutEstadoInput = {
    where: generoScalarWhereInput
    data: XOR<generoUpdateManyMutationInput, generoUncheckedUpdateManyWithoutEstadoInput>
  }

  export type generoScalarWhereInput = {
    AND?: generoScalarWhereInput | generoScalarWhereInput[]
    OR?: generoScalarWhereInput[]
    NOT?: generoScalarWhereInput | generoScalarWhereInput[]
    pk_id_gene?: IntFilter<"genero"> | number
    nom_genero?: StringNullableFilter<"genero"> | string | null
    fk_id_estado?: IntNullableFilter<"genero"> | number | null
  }

  export type datosCreateWithoutGeneroInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    documento?: documentoCreateNestedOneWithoutDatosInput
    civil?: civilCreateNestedOneWithoutDatosInput
    pregrado?: pregradoCreateNestedOneWithoutDatosInput
    semestre?: semestreCreateNestedOneWithoutDatosInput
    tipo_status?: tipo_statusCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutGeneroInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosCreateOrConnectWithoutGeneroInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutGeneroInput, datosUncheckedCreateWithoutGeneroInput>
  }

  export type datosCreateManyGeneroInputEnvelope = {
    data: datosCreateManyGeneroInput | datosCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type estadoCreateWithoutGeneroInput = {
    pk_id_estado: number
    nombre?: string | null
    civil?: civilCreateNestedManyWithoutEstadoInput
    documento?: documentoCreateNestedManyWithoutEstadoInput
  }

  export type estadoUncheckedCreateWithoutGeneroInput = {
    pk_id_estado: number
    nombre?: string | null
    civil?: civilUncheckedCreateNestedManyWithoutEstadoInput
    documento?: documentoUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type estadoCreateOrConnectWithoutGeneroInput = {
    where: estadoWhereUniqueInput
    create: XOR<estadoCreateWithoutGeneroInput, estadoUncheckedCreateWithoutGeneroInput>
  }

  export type datosUpsertWithWhereUniqueWithoutGeneroInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutGeneroInput, datosUncheckedUpdateWithoutGeneroInput>
    create: XOR<datosCreateWithoutGeneroInput, datosUncheckedCreateWithoutGeneroInput>
  }

  export type datosUpdateWithWhereUniqueWithoutGeneroInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutGeneroInput, datosUncheckedUpdateWithoutGeneroInput>
  }

  export type datosUpdateManyWithWhereWithoutGeneroInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutGeneroInput>
  }

  export type estadoUpsertWithoutGeneroInput = {
    update: XOR<estadoUpdateWithoutGeneroInput, estadoUncheckedUpdateWithoutGeneroInput>
    create: XOR<estadoCreateWithoutGeneroInput, estadoUncheckedCreateWithoutGeneroInput>
    where?: estadoWhereInput
  }

  export type estadoUpdateToOneWithWhereWithoutGeneroInput = {
    where?: estadoWhereInput
    data: XOR<estadoUpdateWithoutGeneroInput, estadoUncheckedUpdateWithoutGeneroInput>
  }

  export type estadoUpdateWithoutGeneroInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUpdateManyWithoutEstadoNestedInput
    documento?: documentoUpdateManyWithoutEstadoNestedInput
  }

  export type estadoUncheckedUpdateWithoutGeneroInput = {
    pk_id_estado?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUncheckedUpdateManyWithoutEstadoNestedInput
    documento?: documentoUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type mov_asig_auCreateWithoutHorariosInput = {
    asignaturas?: asignaturasCreateNestedOneWithoutMov_asig_auInput
    aulas?: aulasCreateNestedOneWithoutMov_asig_auInput
  }

  export type mov_asig_auUncheckedCreateWithoutHorariosInput = {
    pk_mov?: number
    fk_asignatura?: number | null
    fk_aula?: number | null
  }

  export type mov_asig_auCreateOrConnectWithoutHorariosInput = {
    where: mov_asig_auWhereUniqueInput
    create: XOR<mov_asig_auCreateWithoutHorariosInput, mov_asig_auUncheckedCreateWithoutHorariosInput>
  }

  export type mov_asig_auCreateManyHorariosInputEnvelope = {
    data: mov_asig_auCreateManyHorariosInput | mov_asig_auCreateManyHorariosInput[]
    skipDuplicates?: boolean
  }

  export type mov_asig_auUpsertWithWhereUniqueWithoutHorariosInput = {
    where: mov_asig_auWhereUniqueInput
    update: XOR<mov_asig_auUpdateWithoutHorariosInput, mov_asig_auUncheckedUpdateWithoutHorariosInput>
    create: XOR<mov_asig_auCreateWithoutHorariosInput, mov_asig_auUncheckedCreateWithoutHorariosInput>
  }

  export type mov_asig_auUpdateWithWhereUniqueWithoutHorariosInput = {
    where: mov_asig_auWhereUniqueInput
    data: XOR<mov_asig_auUpdateWithoutHorariosInput, mov_asig_auUncheckedUpdateWithoutHorariosInput>
  }

  export type mov_asig_auUpdateManyWithWhereWithoutHorariosInput = {
    where: mov_asig_auScalarWhereInput
    data: XOR<mov_asig_auUpdateManyMutationInput, mov_asig_auUncheckedUpdateManyWithoutHorariosInput>
  }

  export type accesoCreateWithoutModulosInput = {
    usuario?: string | null
    contrasena?: string | null
  }

  export type accesoUncheckedCreateWithoutModulosInput = {
    pk_acceso?: number
    usuario?: string | null
    contrasena?: string | null
  }

  export type accesoCreateOrConnectWithoutModulosInput = {
    where: accesoWhereUniqueInput
    create: XOR<accesoCreateWithoutModulosInput, accesoUncheckedCreateWithoutModulosInput>
  }

  export type accesoCreateManyModulosInputEnvelope = {
    data: accesoCreateManyModulosInput | accesoCreateManyModulosInput[]
    skipDuplicates?: boolean
  }

  export type accesoUpsertWithWhereUniqueWithoutModulosInput = {
    where: accesoWhereUniqueInput
    update: XOR<accesoUpdateWithoutModulosInput, accesoUncheckedUpdateWithoutModulosInput>
    create: XOR<accesoCreateWithoutModulosInput, accesoUncheckedCreateWithoutModulosInput>
  }

  export type accesoUpdateWithWhereUniqueWithoutModulosInput = {
    where: accesoWhereUniqueInput
    data: XOR<accesoUpdateWithoutModulosInput, accesoUncheckedUpdateWithoutModulosInput>
  }

  export type accesoUpdateManyWithWhereWithoutModulosInput = {
    where: accesoScalarWhereInput
    data: XOR<accesoUpdateManyMutationInput, accesoUncheckedUpdateManyWithoutModulosInput>
  }

  export type accesoScalarWhereInput = {
    AND?: accesoScalarWhereInput | accesoScalarWhereInput[]
    OR?: accesoScalarWhereInput[]
    NOT?: accesoScalarWhereInput | accesoScalarWhereInput[]
    pk_acceso?: IntFilter<"acceso"> | number
    usuario?: StringNullableFilter<"acceso"> | string | null
    contrasena?: StringNullableFilter<"acceso"> | string | null
    fk_modulo?: IntNullableFilter<"acceso"> | number | null
  }

  export type asignaturasCreateWithoutMov_asig_auInput = {
    nombre_asignatura?: string | null
    codigo?: string | null
    preofe_mate?: preofe_mateCreateNestedManyWithoutAsignaturasInput
  }

  export type asignaturasUncheckedCreateWithoutMov_asig_auInput = {
    pk_asignatura?: number
    nombre_asignatura?: string | null
    codigo?: string | null
    preofe_mate?: preofe_mateUncheckedCreateNestedManyWithoutAsignaturasInput
  }

  export type asignaturasCreateOrConnectWithoutMov_asig_auInput = {
    where: asignaturasWhereUniqueInput
    create: XOR<asignaturasCreateWithoutMov_asig_auInput, asignaturasUncheckedCreateWithoutMov_asig_auInput>
  }

  export type aulasCreateWithoutMov_asig_auInput = {
    nombre_aula?: string | null
    capacidad?: number | null
  }

  export type aulasUncheckedCreateWithoutMov_asig_auInput = {
    pk_aula?: number
    nombre_aula?: string | null
    capacidad?: number | null
  }

  export type aulasCreateOrConnectWithoutMov_asig_auInput = {
    where: aulasWhereUniqueInput
    create: XOR<aulasCreateWithoutMov_asig_auInput, aulasUncheckedCreateWithoutMov_asig_auInput>
  }

  export type horariosCreateWithoutMov_asig_auInput = {
    dia?: string | null
    hora_inicio?: Date | string | null
    hora_fin?: Date | string | null
  }

  export type horariosUncheckedCreateWithoutMov_asig_auInput = {
    pk_horario?: number
    dia?: string | null
    hora_inicio?: Date | string | null
    hora_fin?: Date | string | null
  }

  export type horariosCreateOrConnectWithoutMov_asig_auInput = {
    where: horariosWhereUniqueInput
    create: XOR<horariosCreateWithoutMov_asig_auInput, horariosUncheckedCreateWithoutMov_asig_auInput>
  }

  export type asignaturasUpsertWithoutMov_asig_auInput = {
    update: XOR<asignaturasUpdateWithoutMov_asig_auInput, asignaturasUncheckedUpdateWithoutMov_asig_auInput>
    create: XOR<asignaturasCreateWithoutMov_asig_auInput, asignaturasUncheckedCreateWithoutMov_asig_auInput>
    where?: asignaturasWhereInput
  }

  export type asignaturasUpdateToOneWithWhereWithoutMov_asig_auInput = {
    where?: asignaturasWhereInput
    data: XOR<asignaturasUpdateWithoutMov_asig_auInput, asignaturasUncheckedUpdateWithoutMov_asig_auInput>
  }

  export type asignaturasUpdateWithoutMov_asig_auInput = {
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUpdateManyWithoutAsignaturasNestedInput
  }

  export type asignaturasUncheckedUpdateWithoutMov_asig_auInput = {
    pk_asignatura?: IntFieldUpdateOperationsInput | number
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUncheckedUpdateManyWithoutAsignaturasNestedInput
  }

  export type aulasUpsertWithoutMov_asig_auInput = {
    update: XOR<aulasUpdateWithoutMov_asig_auInput, aulasUncheckedUpdateWithoutMov_asig_auInput>
    create: XOR<aulasCreateWithoutMov_asig_auInput, aulasUncheckedCreateWithoutMov_asig_auInput>
    where?: aulasWhereInput
  }

  export type aulasUpdateToOneWithWhereWithoutMov_asig_auInput = {
    where?: aulasWhereInput
    data: XOR<aulasUpdateWithoutMov_asig_auInput, aulasUncheckedUpdateWithoutMov_asig_auInput>
  }

  export type aulasUpdateWithoutMov_asig_auInput = {
    nombre_aula?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aulasUncheckedUpdateWithoutMov_asig_auInput = {
    pk_aula?: IntFieldUpdateOperationsInput | number
    nombre_aula?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type horariosUpsertWithoutMov_asig_auInput = {
    update: XOR<horariosUpdateWithoutMov_asig_auInput, horariosUncheckedUpdateWithoutMov_asig_auInput>
    create: XOR<horariosCreateWithoutMov_asig_auInput, horariosUncheckedCreateWithoutMov_asig_auInput>
    where?: horariosWhereInput
  }

  export type horariosUpdateToOneWithWhereWithoutMov_asig_auInput = {
    where?: horariosWhereInput
    data: XOR<horariosUpdateWithoutMov_asig_auInput, horariosUncheckedUpdateWithoutMov_asig_auInput>
  }

  export type horariosUpdateWithoutMov_asig_auInput = {
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type horariosUncheckedUpdateWithoutMov_asig_auInput = {
    pk_horario?: IntFieldUpdateOperationsInput | number
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hora_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type preofe_mateCreateWithoutPregradoInput = {
    asignaturas?: asignaturasCreateNestedOneWithoutPreofe_mateInput
  }

  export type preofe_mateUncheckedCreateWithoutPregradoInput = {
    pk_preofe?: number
    fk_asignatura?: number | null
  }

  export type preofe_mateCreateOrConnectWithoutPregradoInput = {
    where: preofe_mateWhereUniqueInput
    create: XOR<preofe_mateCreateWithoutPregradoInput, preofe_mateUncheckedCreateWithoutPregradoInput>
  }

  export type preofe_mateCreateManyPregradoInputEnvelope = {
    data: preofe_mateCreateManyPregradoInput | preofe_mateCreateManyPregradoInput[]
    skipDuplicates?: boolean
  }

  export type semestreCreateWithoutPregradoInput = {
    numero?: number | null
    datos?: datosCreateNestedManyWithoutSemestreInput
  }

  export type semestreUncheckedCreateWithoutPregradoInput = {
    pk_semestre?: number
    numero?: number | null
    datos?: datosUncheckedCreateNestedManyWithoutSemestreInput
  }

  export type semestreCreateOrConnectWithoutPregradoInput = {
    where: semestreWhereUniqueInput
    create: XOR<semestreCreateWithoutPregradoInput, semestreUncheckedCreateWithoutPregradoInput>
  }

  export type semestreCreateManyPregradoInputEnvelope = {
    data: semestreCreateManyPregradoInput | semestreCreateManyPregradoInput[]
    skipDuplicates?: boolean
  }

  export type datosCreateWithoutPregradoInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    documento?: documentoCreateNestedOneWithoutDatosInput
    civil?: civilCreateNestedOneWithoutDatosInput
    genero?: generoCreateNestedOneWithoutDatosInput
    semestre?: semestreCreateNestedOneWithoutDatosInput
    tipo_status?: tipo_statusCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutPregradoInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosCreateOrConnectWithoutPregradoInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutPregradoInput, datosUncheckedCreateWithoutPregradoInput>
  }

  export type datosCreateManyPregradoInputEnvelope = {
    data: datosCreateManyPregradoInput | datosCreateManyPregradoInput[]
    skipDuplicates?: boolean
  }

  export type preofe_mateUpsertWithWhereUniqueWithoutPregradoInput = {
    where: preofe_mateWhereUniqueInput
    update: XOR<preofe_mateUpdateWithoutPregradoInput, preofe_mateUncheckedUpdateWithoutPregradoInput>
    create: XOR<preofe_mateCreateWithoutPregradoInput, preofe_mateUncheckedCreateWithoutPregradoInput>
  }

  export type preofe_mateUpdateWithWhereUniqueWithoutPregradoInput = {
    where: preofe_mateWhereUniqueInput
    data: XOR<preofe_mateUpdateWithoutPregradoInput, preofe_mateUncheckedUpdateWithoutPregradoInput>
  }

  export type preofe_mateUpdateManyWithWhereWithoutPregradoInput = {
    where: preofe_mateScalarWhereInput
    data: XOR<preofe_mateUpdateManyMutationInput, preofe_mateUncheckedUpdateManyWithoutPregradoInput>
  }

  export type semestreUpsertWithWhereUniqueWithoutPregradoInput = {
    where: semestreWhereUniqueInput
    update: XOR<semestreUpdateWithoutPregradoInput, semestreUncheckedUpdateWithoutPregradoInput>
    create: XOR<semestreCreateWithoutPregradoInput, semestreUncheckedCreateWithoutPregradoInput>
  }

  export type semestreUpdateWithWhereUniqueWithoutPregradoInput = {
    where: semestreWhereUniqueInput
    data: XOR<semestreUpdateWithoutPregradoInput, semestreUncheckedUpdateWithoutPregradoInput>
  }

  export type semestreUpdateManyWithWhereWithoutPregradoInput = {
    where: semestreScalarWhereInput
    data: XOR<semestreUpdateManyMutationInput, semestreUncheckedUpdateManyWithoutPregradoInput>
  }

  export type semestreScalarWhereInput = {
    AND?: semestreScalarWhereInput | semestreScalarWhereInput[]
    OR?: semestreScalarWhereInput[]
    NOT?: semestreScalarWhereInput | semestreScalarWhereInput[]
    pk_semestre?: IntFilter<"semestre"> | number
    numero?: IntNullableFilter<"semestre"> | number | null
    fk_pregrado?: IntNullableFilter<"semestre"> | number | null
  }

  export type datosUpsertWithWhereUniqueWithoutPregradoInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutPregradoInput, datosUncheckedUpdateWithoutPregradoInput>
    create: XOR<datosCreateWithoutPregradoInput, datosUncheckedCreateWithoutPregradoInput>
  }

  export type datosUpdateWithWhereUniqueWithoutPregradoInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutPregradoInput, datosUncheckedUpdateWithoutPregradoInput>
  }

  export type datosUpdateManyWithWhereWithoutPregradoInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutPregradoInput>
  }

  export type pregradoCreateWithoutPreofe_mateInput = {
    nombre_pregrado?: string | null
    semestre?: semestreCreateNestedManyWithoutPregradoInput
    datos?: datosCreateNestedManyWithoutPregradoInput
  }

  export type pregradoUncheckedCreateWithoutPreofe_mateInput = {
    pk_pregrado?: number
    nombre_pregrado?: string | null
    semestre?: semestreUncheckedCreateNestedManyWithoutPregradoInput
    datos?: datosUncheckedCreateNestedManyWithoutPregradoInput
  }

  export type pregradoCreateOrConnectWithoutPreofe_mateInput = {
    where: pregradoWhereUniqueInput
    create: XOR<pregradoCreateWithoutPreofe_mateInput, pregradoUncheckedCreateWithoutPreofe_mateInput>
  }

  export type asignaturasCreateWithoutPreofe_mateInput = {
    nombre_asignatura?: string | null
    codigo?: string | null
    mov_asig_au?: mov_asig_auCreateNestedManyWithoutAsignaturasInput
  }

  export type asignaturasUncheckedCreateWithoutPreofe_mateInput = {
    pk_asignatura?: number
    nombre_asignatura?: string | null
    codigo?: string | null
    mov_asig_au?: mov_asig_auUncheckedCreateNestedManyWithoutAsignaturasInput
  }

  export type asignaturasCreateOrConnectWithoutPreofe_mateInput = {
    where: asignaturasWhereUniqueInput
    create: XOR<asignaturasCreateWithoutPreofe_mateInput, asignaturasUncheckedCreateWithoutPreofe_mateInput>
  }

  export type pregradoUpsertWithoutPreofe_mateInput = {
    update: XOR<pregradoUpdateWithoutPreofe_mateInput, pregradoUncheckedUpdateWithoutPreofe_mateInput>
    create: XOR<pregradoCreateWithoutPreofe_mateInput, pregradoUncheckedCreateWithoutPreofe_mateInput>
    where?: pregradoWhereInput
  }

  export type pregradoUpdateToOneWithWhereWithoutPreofe_mateInput = {
    where?: pregradoWhereInput
    data: XOR<pregradoUpdateWithoutPreofe_mateInput, pregradoUncheckedUpdateWithoutPreofe_mateInput>
  }

  export type pregradoUpdateWithoutPreofe_mateInput = {
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    semestre?: semestreUpdateManyWithoutPregradoNestedInput
    datos?: datosUpdateManyWithoutPregradoNestedInput
  }

  export type pregradoUncheckedUpdateWithoutPreofe_mateInput = {
    pk_pregrado?: IntFieldUpdateOperationsInput | number
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    semestre?: semestreUncheckedUpdateManyWithoutPregradoNestedInput
    datos?: datosUncheckedUpdateManyWithoutPregradoNestedInput
  }

  export type asignaturasUpsertWithoutPreofe_mateInput = {
    update: XOR<asignaturasUpdateWithoutPreofe_mateInput, asignaturasUncheckedUpdateWithoutPreofe_mateInput>
    create: XOR<asignaturasCreateWithoutPreofe_mateInput, asignaturasUncheckedCreateWithoutPreofe_mateInput>
    where?: asignaturasWhereInput
  }

  export type asignaturasUpdateToOneWithWhereWithoutPreofe_mateInput = {
    where?: asignaturasWhereInput
    data: XOR<asignaturasUpdateWithoutPreofe_mateInput, asignaturasUncheckedUpdateWithoutPreofe_mateInput>
  }

  export type asignaturasUpdateWithoutPreofe_mateInput = {
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    mov_asig_au?: mov_asig_auUpdateManyWithoutAsignaturasNestedInput
  }

  export type asignaturasUncheckedUpdateWithoutPreofe_mateInput = {
    pk_asignatura?: IntFieldUpdateOperationsInput | number
    nombre_asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    mov_asig_au?: mov_asig_auUncheckedUpdateManyWithoutAsignaturasNestedInput
  }

  export type pregradoCreateWithoutSemestreInput = {
    nombre_pregrado?: string | null
    preofe_mate?: preofe_mateCreateNestedManyWithoutPregradoInput
    datos?: datosCreateNestedManyWithoutPregradoInput
  }

  export type pregradoUncheckedCreateWithoutSemestreInput = {
    pk_pregrado?: number
    nombre_pregrado?: string | null
    preofe_mate?: preofe_mateUncheckedCreateNestedManyWithoutPregradoInput
    datos?: datosUncheckedCreateNestedManyWithoutPregradoInput
  }

  export type pregradoCreateOrConnectWithoutSemestreInput = {
    where: pregradoWhereUniqueInput
    create: XOR<pregradoCreateWithoutSemestreInput, pregradoUncheckedCreateWithoutSemestreInput>
  }

  export type datosCreateWithoutSemestreInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    documento?: documentoCreateNestedOneWithoutDatosInput
    civil?: civilCreateNestedOneWithoutDatosInput
    genero?: generoCreateNestedOneWithoutDatosInput
    pregrado?: pregradoCreateNestedOneWithoutDatosInput
    tipo_status?: tipo_statusCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutSemestreInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosCreateOrConnectWithoutSemestreInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutSemestreInput, datosUncheckedCreateWithoutSemestreInput>
  }

  export type datosCreateManySemestreInputEnvelope = {
    data: datosCreateManySemestreInput | datosCreateManySemestreInput[]
    skipDuplicates?: boolean
  }

  export type pregradoUpsertWithoutSemestreInput = {
    update: XOR<pregradoUpdateWithoutSemestreInput, pregradoUncheckedUpdateWithoutSemestreInput>
    create: XOR<pregradoCreateWithoutSemestreInput, pregradoUncheckedCreateWithoutSemestreInput>
    where?: pregradoWhereInput
  }

  export type pregradoUpdateToOneWithWhereWithoutSemestreInput = {
    where?: pregradoWhereInput
    data: XOR<pregradoUpdateWithoutSemestreInput, pregradoUncheckedUpdateWithoutSemestreInput>
  }

  export type pregradoUpdateWithoutSemestreInput = {
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUpdateManyWithoutPregradoNestedInput
    datos?: datosUpdateManyWithoutPregradoNestedInput
  }

  export type pregradoUncheckedUpdateWithoutSemestreInput = {
    pk_pregrado?: IntFieldUpdateOperationsInput | number
    nombre_pregrado?: NullableStringFieldUpdateOperationsInput | string | null
    preofe_mate?: preofe_mateUncheckedUpdateManyWithoutPregradoNestedInput
    datos?: datosUncheckedUpdateManyWithoutPregradoNestedInput
  }

  export type datosUpsertWithWhereUniqueWithoutSemestreInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutSemestreInput, datosUncheckedUpdateWithoutSemestreInput>
    create: XOR<datosCreateWithoutSemestreInput, datosUncheckedCreateWithoutSemestreInput>
  }

  export type datosUpdateWithWhereUniqueWithoutSemestreInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutSemestreInput, datosUncheckedUpdateWithoutSemestreInput>
  }

  export type datosUpdateManyWithWhereWithoutSemestreInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutSemestreInput>
  }

  export type datosCreateWithoutTipo_statusInput = {
    nombre?: string | null
    apellido?: string | null
    correo?: string | null
    telefono?: string | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
    documento?: documentoCreateNestedOneWithoutDatosInput
    civil?: civilCreateNestedOneWithoutDatosInput
    genero?: generoCreateNestedOneWithoutDatosInput
    pregrado?: pregradoCreateNestedOneWithoutDatosInput
    semestre?: semestreCreateNestedOneWithoutDatosInput
  }

  export type datosUncheckedCreateWithoutTipo_statusInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosCreateOrConnectWithoutTipo_statusInput = {
    where: datosWhereUniqueInput
    create: XOR<datosCreateWithoutTipo_statusInput, datosUncheckedCreateWithoutTipo_statusInput>
  }

  export type datosCreateManyTipo_statusInputEnvelope = {
    data: datosCreateManyTipo_statusInput | datosCreateManyTipo_statusInput[]
    skipDuplicates?: boolean
  }

  export type datosUpsertWithWhereUniqueWithoutTipo_statusInput = {
    where: datosWhereUniqueInput
    update: XOR<datosUpdateWithoutTipo_statusInput, datosUncheckedUpdateWithoutTipo_statusInput>
    create: XOR<datosCreateWithoutTipo_statusInput, datosUncheckedCreateWithoutTipo_statusInput>
  }

  export type datosUpdateWithWhereUniqueWithoutTipo_statusInput = {
    where: datosWhereUniqueInput
    data: XOR<datosUpdateWithoutTipo_statusInput, datosUncheckedUpdateWithoutTipo_statusInput>
  }

  export type datosUpdateManyWithWhereWithoutTipo_statusInput = {
    where: datosScalarWhereInput
    data: XOR<datosUpdateManyMutationInput, datosUncheckedUpdateManyWithoutTipo_statusInput>
  }

  export type mov_asig_auCreateManyAsignaturasInput = {
    pk_mov?: number
    fk_aula?: number | null
    fk_horario?: number | null
  }

  export type preofe_mateCreateManyAsignaturasInput = {
    pk_preofe?: number
    fk_pregrado?: number | null
  }

  export type mov_asig_auUpdateWithoutAsignaturasInput = {
    aulas?: aulasUpdateOneWithoutMov_asig_auNestedInput
    horarios?: horariosUpdateOneWithoutMov_asig_auNestedInput
  }

  export type mov_asig_auUncheckedUpdateWithoutAsignaturasInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_aula?: NullableIntFieldUpdateOperationsInput | number | null
    fk_horario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mov_asig_auUncheckedUpdateManyWithoutAsignaturasInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_aula?: NullableIntFieldUpdateOperationsInput | number | null
    fk_horario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type preofe_mateUpdateWithoutAsignaturasInput = {
    pregrado?: pregradoUpdateOneWithoutPreofe_mateNestedInput
  }

  export type preofe_mateUncheckedUpdateWithoutAsignaturasInput = {
    pk_preofe?: IntFieldUpdateOperationsInput | number
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type preofe_mateUncheckedUpdateManyWithoutAsignaturasInput = {
    pk_preofe?: IntFieldUpdateOperationsInput | number
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mov_asig_auCreateManyAulasInput = {
    pk_mov?: number
    fk_asignatura?: number | null
    fk_horario?: number | null
  }

  export type mov_asig_auUpdateWithoutAulasInput = {
    asignaturas?: asignaturasUpdateOneWithoutMov_asig_auNestedInput
    horarios?: horariosUpdateOneWithoutMov_asig_auNestedInput
  }

  export type mov_asig_auUncheckedUpdateWithoutAulasInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
    fk_horario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mov_asig_auUncheckedUpdateManyWithoutAulasInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
    fk_horario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type datosCreateManyCivilInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateWithoutCivilInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateOneWithoutDatosNestedInput
    genero?: generoUpdateOneWithoutDatosNestedInput
    pregrado?: pregradoUpdateOneWithoutDatosNestedInput
    semestre?: semestreUpdateOneWithoutDatosNestedInput
    tipo_status?: tipo_statusUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutCivilInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyWithoutCivilInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosCreateManyDocumentoInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateWithoutDocumentoInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    civil?: civilUpdateOneWithoutDatosNestedInput
    genero?: generoUpdateOneWithoutDatosNestedInput
    pregrado?: pregradoUpdateOneWithoutDatosNestedInput
    semestre?: semestreUpdateOneWithoutDatosNestedInput
    tipo_status?: tipo_statusUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutDocumentoInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyWithoutDocumentoInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type civilCreateManyEstadoInput = {
    pk_id_civil: number
    nombre_civil?: string | null
  }

  export type documentoCreateManyEstadoInput = {
    pk_id_doc: number
    nombre_documento?: string | null
  }

  export type generoCreateManyEstadoInput = {
    pk_id_gene: number
    nom_genero?: string | null
  }

  export type civilUpdateWithoutEstadoInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUpdateManyWithoutCivilNestedInput
  }

  export type civilUncheckedUpdateWithoutEstadoInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUncheckedUpdateManyWithoutCivilNestedInput
  }

  export type civilUncheckedUpdateManyWithoutEstadoInput = {
    pk_id_civil?: IntFieldUpdateOperationsInput | number
    nombre_civil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documentoUpdateWithoutEstadoInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUpdateManyWithoutDocumentoNestedInput
  }

  export type documentoUncheckedUpdateWithoutEstadoInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type documentoUncheckedUpdateManyWithoutEstadoInput = {
    pk_id_doc?: IntFieldUpdateOperationsInput | number
    nombre_documento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type generoUpdateWithoutEstadoInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUpdateManyWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateWithoutEstadoInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: datosUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type generoUncheckedUpdateManyWithoutEstadoInput = {
    pk_id_gene?: IntFieldUpdateOperationsInput | number
    nom_genero?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosCreateManyGeneroInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateWithoutGeneroInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateOneWithoutDatosNestedInput
    civil?: civilUpdateOneWithoutDatosNestedInput
    pregrado?: pregradoUpdateOneWithoutDatosNestedInput
    semestre?: semestreUpdateOneWithoutDatosNestedInput
    tipo_status?: tipo_statusUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutGeneroInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyWithoutGeneroInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mov_asig_auCreateManyHorariosInput = {
    pk_mov?: number
    fk_asignatura?: number | null
    fk_aula?: number | null
  }

  export type mov_asig_auUpdateWithoutHorariosInput = {
    asignaturas?: asignaturasUpdateOneWithoutMov_asig_auNestedInput
    aulas?: aulasUpdateOneWithoutMov_asig_auNestedInput
  }

  export type mov_asig_auUncheckedUpdateWithoutHorariosInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
    fk_aula?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mov_asig_auUncheckedUpdateManyWithoutHorariosInput = {
    pk_mov?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
    fk_aula?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type accesoCreateManyModulosInput = {
    pk_acceso?: number
    usuario?: string | null
    contrasena?: string | null
  }

  export type accesoUpdateWithoutModulosInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accesoUncheckedUpdateWithoutModulosInput = {
    pk_acceso?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accesoUncheckedUpdateManyWithoutModulosInput = {
    pk_acceso?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type preofe_mateCreateManyPregradoInput = {
    pk_preofe?: number
    fk_asignatura?: number | null
  }

  export type semestreCreateManyPregradoInput = {
    pk_semestre?: number
    numero?: number | null
  }

  export type datosCreateManyPregradoInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_id_semestre?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type preofe_mateUpdateWithoutPregradoInput = {
    asignaturas?: asignaturasUpdateOneWithoutPreofe_mateNestedInput
  }

  export type preofe_mateUncheckedUpdateWithoutPregradoInput = {
    pk_preofe?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type preofe_mateUncheckedUpdateManyWithoutPregradoInput = {
    pk_preofe?: IntFieldUpdateOperationsInput | number
    fk_asignatura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type semestreUpdateWithoutPregradoInput = {
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    datos?: datosUpdateManyWithoutSemestreNestedInput
  }

  export type semestreUncheckedUpdateWithoutPregradoInput = {
    pk_semestre?: IntFieldUpdateOperationsInput | number
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    datos?: datosUncheckedUpdateManyWithoutSemestreNestedInput
  }

  export type semestreUncheckedUpdateManyWithoutPregradoInput = {
    pk_semestre?: IntFieldUpdateOperationsInput | number
    numero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type datosUpdateWithoutPregradoInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateOneWithoutDatosNestedInput
    civil?: civilUpdateOneWithoutDatosNestedInput
    genero?: generoUpdateOneWithoutDatosNestedInput
    semestre?: semestreUpdateOneWithoutDatosNestedInput
    tipo_status?: tipo_statusUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutPregradoInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyWithoutPregradoInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosCreateManySemestreInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_tipo_status?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateWithoutSemestreInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateOneWithoutDatosNestedInput
    civil?: civilUpdateOneWithoutDatosNestedInput
    genero?: generoUpdateOneWithoutDatosNestedInput
    pregrado?: pregradoUpdateOneWithoutDatosNestedInput
    tipo_status?: tipo_statusUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutSemestreInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyWithoutSemestreInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_tipo_status?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosCreateManyTipo_statusInput = {
    pk_dato?: number
    nombre?: string | null
    apellido?: string | null
    fk_id_doc?: number | null
    fk_id_civil?: number | null
    fk_id_gene?: number | null
    correo?: string | null
    telefono?: string | null
    fk_pregrado?: number | null
    fk_id_semestre?: number | null
    asignatura?: string | null
    salon?: string | null
    dia?: string | null
    hora_inicio?: string | null
    hora_fin?: string | null
  }

  export type datosUpdateWithoutTipo_statusInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: documentoUpdateOneWithoutDatosNestedInput
    civil?: civilUpdateOneWithoutDatosNestedInput
    genero?: generoUpdateOneWithoutDatosNestedInput
    pregrado?: pregradoUpdateOneWithoutDatosNestedInput
    semestre?: semestreUpdateOneWithoutDatosNestedInput
  }

  export type datosUncheckedUpdateWithoutTipo_statusInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type datosUncheckedUpdateManyWithoutTipo_statusInput = {
    pk_dato?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_doc?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_civil?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_gene?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fk_pregrado?: NullableIntFieldUpdateOperationsInput | number | null
    fk_id_semestre?: NullableIntFieldUpdateOperationsInput | number | null
    asignatura?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    hora_inicio?: NullableStringFieldUpdateOperationsInput | string | null
    hora_fin?: NullableStringFieldUpdateOperationsInput | string | null
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