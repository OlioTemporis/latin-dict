import NewWord from "../components/new-word";

export default function New() {
  return (
    <>
      <div className="bg-slate-300 dark:bg-slate-600 max-w-screen-sm mx-auto p-6 rounded-md">
        <h2 className="text-3xl font-bold dark:text-white text-center py-4">
          Novum Vocābulum
        </h2>
        <NewWord />
      </div>
    </>
  );
}
