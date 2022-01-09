module.exports = async function(package) {
	return (await import(package)).default;
}