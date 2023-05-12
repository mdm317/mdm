/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Box = {
  __typename?: 'Box';
  color: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type BoxWithPage = {
  __typename?: 'BoxWithPage';
  data: Array<Box>;
  nxt?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeBoxTitle?: Maybe<Box>;
  changeBoxTitleStrangeOutput: Scalars['String'];
};


export type MutationChangeBoxTitleArgs = {
  id: Scalars['Int'];
};


export type MutationChangeBoxTitleStrangeOutputArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  boxList: BoxWithPage;
  hello: Scalars['String'];
};


export type QueryBoxListArgs = {
  nxt?: InputMaybe<Scalars['Int']>;
};

export type BoxListQueryVariables = Exact<{
  nxt?: InputMaybe<Scalars['Int']>;
}>;


export type BoxListQuery = { __typename?: 'Query', boxList: { __typename?: 'BoxWithPage', nxt?: number | null, data: Array<{ __typename?: 'Box', id: number, title: string, color: string }> } };

export type ChangeBoxTitleMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ChangeBoxTitleMutation = { __typename?: 'Mutation', changeBoxTitle?: { __typename?: 'Box', id: number, title: string } | null };

export type ChangeBoxTitleStrangeOutputMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ChangeBoxTitleStrangeOutputMutation = { __typename?: 'Mutation', changeBoxTitleStrangeOutput: string };


export const BoxListDocument = gql`
    query BoxList($nxt: Int) {
  boxList(nxt: $nxt) {
    nxt
    data {
      id
      title
      color
    }
  }
}
    `;

/**
 * __useBoxListQuery__
 *
 * To run a query within a React component, call `useBoxListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoxListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoxListQuery({
 *   variables: {
 *      nxt: // value for 'nxt'
 *   },
 * });
 */
export function useBoxListQuery(baseOptions?: Apollo.QueryHookOptions<BoxListQuery, BoxListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoxListQuery, BoxListQueryVariables>(BoxListDocument, options);
      }
export function useBoxListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoxListQuery, BoxListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoxListQuery, BoxListQueryVariables>(BoxListDocument, options);
        }
export type BoxListQueryHookResult = ReturnType<typeof useBoxListQuery>;
export type BoxListLazyQueryHookResult = ReturnType<typeof useBoxListLazyQuery>;
export type BoxListQueryResult = Apollo.QueryResult<BoxListQuery, BoxListQueryVariables>;
export const ChangeBoxTitleDocument = gql`
    mutation ChangeBoxTitle($id: Int!) {
  changeBoxTitle(id: $id) {
    id
    title
  }
}
    `;
export type ChangeBoxTitleMutationFn = Apollo.MutationFunction<ChangeBoxTitleMutation, ChangeBoxTitleMutationVariables>;

/**
 * __useChangeBoxTitleMutation__
 *
 * To run a mutation, you first call `useChangeBoxTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBoxTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBoxTitleMutation, { data, loading, error }] = useChangeBoxTitleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangeBoxTitleMutation(baseOptions?: Apollo.MutationHookOptions<ChangeBoxTitleMutation, ChangeBoxTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeBoxTitleMutation, ChangeBoxTitleMutationVariables>(ChangeBoxTitleDocument, options);
      }
export type ChangeBoxTitleMutationHookResult = ReturnType<typeof useChangeBoxTitleMutation>;
export type ChangeBoxTitleMutationResult = Apollo.MutationResult<ChangeBoxTitleMutation>;
export type ChangeBoxTitleMutationOptions = Apollo.BaseMutationOptions<ChangeBoxTitleMutation, ChangeBoxTitleMutationVariables>;
export const ChangeBoxTitleStrangeOutputDocument = gql`
    mutation ChangeBoxTitleStrangeOutput($id: Int!) {
  changeBoxTitleStrangeOutput(id: $id)
}
    `;
export type ChangeBoxTitleStrangeOutputMutationFn = Apollo.MutationFunction<ChangeBoxTitleStrangeOutputMutation, ChangeBoxTitleStrangeOutputMutationVariables>;

/**
 * __useChangeBoxTitleStrangeOutputMutation__
 *
 * To run a mutation, you first call `useChangeBoxTitleStrangeOutputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBoxTitleStrangeOutputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBoxTitleStrangeOutputMutation, { data, loading, error }] = useChangeBoxTitleStrangeOutputMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangeBoxTitleStrangeOutputMutation(baseOptions?: Apollo.MutationHookOptions<ChangeBoxTitleStrangeOutputMutation, ChangeBoxTitleStrangeOutputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeBoxTitleStrangeOutputMutation, ChangeBoxTitleStrangeOutputMutationVariables>(ChangeBoxTitleStrangeOutputDocument, options);
      }
export type ChangeBoxTitleStrangeOutputMutationHookResult = ReturnType<typeof useChangeBoxTitleStrangeOutputMutation>;
export type ChangeBoxTitleStrangeOutputMutationResult = Apollo.MutationResult<ChangeBoxTitleStrangeOutputMutation>;
export type ChangeBoxTitleStrangeOutputMutationOptions = Apollo.BaseMutationOptions<ChangeBoxTitleStrangeOutputMutation, ChangeBoxTitleStrangeOutputMutationVariables>;