#!/usr/bin/env sh
set -ex

yarn

yarn graphql-codegen

yarn gql:start
