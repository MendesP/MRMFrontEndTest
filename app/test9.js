export default function countNodes(root) {
	var total = 1;
	if(root == null)
	{
		return 0;
	}
	else{
		total += countNodes(root.left);
		total += countNodes(root.right);
		return total;
	}
}

