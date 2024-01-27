const resolvers = {
  Query: {
    contents: async (parent, args, context, info) => {
      return new Promise((resolve, reject) => {
        context.data((result) => {
          resolve(filteredResult);
        });
      });
    },
  },
};

export default resolvers;
