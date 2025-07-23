const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    error: "Movie title must be a string",
  }),
  year: z
    .number({ error: "Year must be a number" })
    .int({ error: "Year must be an integer" })
    .min(1900, { error: "Min value must be 1900" })
    .max(2024, { error: "Max value must be 2024" }),
  director: z.string({ error: "Director must be a string" }),
  duration: z
    .number({ error: "Duration must be a number" })
    .int({ error: "Duration must be an integer" })
    .positive({ error: "Duration must be more than 0" }),
  rate: z
    .number({ error: "Rate must be a number" })
    .min(0, { error: "Rate min value must be 0" })
    .max(10, { error: "Rate max value must be 10" })
    .default(0),
  poster: z.url({
    error: "Poster must ve a valid url",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Sci-Fi",
      "Crime",
      "Drama",
      "Romance",
      "Biography",
      "Fantasy",
    ]),
    {
      error: "Must be an array of enum Genre",
    }
  ),
});

function validateMovie(object) {
  return movieSchema.safeParse(object);
}

module.exports = { validateMovie };
